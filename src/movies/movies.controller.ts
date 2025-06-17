import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('api/movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get(':id')
  async getMovies(@Param('id') id: string) {
    const movies = await this.moviesService.getRandomMovies(10);
    return { movies };
  }
}
