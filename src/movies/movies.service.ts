import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async getRandomMovies(count: number) {
    // If using Postgres
    return this.prisma.movie.findMany({
      take: count,
      orderBy: {
        id: 'desc' // Simple random approach - better to use proper random
      }
    });
  }
}