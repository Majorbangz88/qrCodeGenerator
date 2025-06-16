import { Module } from '@nestjs/common';
import { QrService } from './qr.service';
import { QrController } from './qr.controller';
import { PrismaService } from '../prisma.service';
import { MoviesModule } from '../movies/movies.module'; // Import MoviesModule

@Module({
  imports: [MoviesModule],
  controllers: [QrController],
  providers: [QrService, PrismaService],
})
export class QrModule {}
