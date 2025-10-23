import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieEntity } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

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
}
