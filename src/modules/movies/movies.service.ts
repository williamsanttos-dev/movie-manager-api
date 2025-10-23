import { Injectable } from '@nestjs/common';

import { CreateMovieDto } from './dto/create-movie.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MovieEntity } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createMovieDto: CreateMovieDto): Promise<MovieEntity> {
    const movie = await this.prisma.movie.create({
      data: {
        ...createMovieDto,
      },
    });
    return movie;
  }

  async findAll(): Promise<MovieEntity[]> {
    const movies = await this.prisma.movie.findMany();
    return movies;
  }
}
