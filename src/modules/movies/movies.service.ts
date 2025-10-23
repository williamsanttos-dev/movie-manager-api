import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateMovieDto } from './dto/create-movie.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MovieEntity } from './entities/movie.entity';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Prisma } from '@prisma/client';

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

  async findOne(id: number): Promise<MovieEntity> {
    const movie = await this.prisma.movie.findUnique({ where: { id } });
    if (!movie) throw new BadRequestException();

    return movie;
  }

  async update(
    id: number,
    updateMovieDto: UpdateMovieDto,
  ): Promise<MovieEntity> {
    try {
      const movie = await this.prisma.movie.update({
        where: { id },
        data: { ...updateMovieDto },
      });
      return movie;
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2025'
      )
        throw new NotFoundException(`Movie with id ${id} not found`);
      throw err;
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.prisma.movie.delete({
        where: { id },
      });
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2025'
      )
        throw new NotFoundException(`Movie with id ${id} not found`);
      throw err;
    }
  }
}
