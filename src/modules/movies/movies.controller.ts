import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  HttpCode,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieEntity } from './entities/movie.entity';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('test')
  teste(): string {
    return 'OK';
  }

  @Post()
  async create(@Body() createMovieDto: CreateMovieDto): Promise<MovieEntity> {
    return await this.moviesService.create(createMovieDto);
  }

  @Get()
  async findAll(): Promise<MovieEntity[]> {
    return await this.moviesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MovieEntity> {
    return await this.moviesService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ): Promise<MovieEntity> {
    return await this.moviesService.update(+id, updateMovieDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.moviesService.remove(+id);
  }
}
