import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from '../../generated/prisma';
// import { Movie } from '@prisma/client';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get(':id')
  async getMovieById(@Param('id') id: string): Promise<Movie> {
    const movie = await this.moviesService.getMovieById(+id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }


  @Get('random/10')
  async getRandomMovies(): Promise<Movie[]> {
    return this.moviesService.getRandom10Movies(10);
  }
}
