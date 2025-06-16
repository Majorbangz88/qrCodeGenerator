import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { MoviesModule } from './movies/movies.module';
import { QrModule } from './qr/qr.module';

@Module({
  imports: [MoviesModule, QrModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})

export class AppModule {}

