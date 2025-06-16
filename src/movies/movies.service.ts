import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import cloudinary from '../utils/cloudinary';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { Movie } from '@prisma/client';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async create(createMovieDto: CreateMovieDto) {
    const { localPosterPath, localImagePaths, ...data } = createMovieDto;

    const posterUpload = await cloudinary.uploader.upload(localPosterPath, {
      folder: 'movies/posters',
    });

    const imageUrls: string[] = [];
    for (const img of localImagePaths) {
      const upload = await cloudinary.uploader.upload(img, {
        folder: 'movies/images',
      });
      imageUrls.push(upload.secure_url);
    }

    return this.prisma.movie.create({
      data: {
        ...data,
        posterUrl: posterUpload.secure_url,
        posterCloudinaryId: posterUpload.public_id,
        images: imageUrls,
      },
    });
  }

  async getRandom10Movies(count: number): Promise<Movie[]> {
    return this.prisma.movie.findMany({
      take: count,
      orderBy: { id: 'asc' }, // or random logic
    });
  }

  // async getRandom10Movies(count: number) {
  //   return this.prisma.$queryRawUnsafe(`SELECT * FROM "Movie" ORDER BY RANDOM() LIMIT ${count}`);
  // }

  async getMovieById(id: number) {
    return this.prisma.movie.findUnique({
      where: { id }
    });
  }

  async getMoviesByIds(ids: number[]) {
    return this.prisma.movie.findMany({
      where: {
        id: { in: ids }
      }
    });
  }

}
