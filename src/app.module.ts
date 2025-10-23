import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { MoviesModule } from './modules/movies/movies.module';

@Module({
  imports: [PrismaModule, MoviesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
