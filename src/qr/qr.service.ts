import { Injectable } from '@nestjs/common';
import { MoviesService } from '../movies/movies.service';
import * as QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class QrService {
  private qrMap = new Map<string, number[]>();

  constructor(private moviesService: MoviesService) {
    this.startGenerating();
  }

  private async startGenerating() {
    setInterval(async () => {
      const uuid = uuidv4();
      const movies = await this.moviesService.getRandomMovies(10);
      const movieIds = movies.map((movie: any) => movie.id);
      this.qrMap.set(uuid, movieIds);

      console.log(`Generated QR: ${uuid}`);
    }, 10000);
  }

  async getCurrentQr() {
    const latestUuid = Array.from(this.qrMap.keys()).pop();
    if (!latestUuid) return null;
    const link = `${process.env.BASE_URL}/movies/${latestUuid}`;
    const qrCode = await QRCode.toDataURL(link);
    return qrCode;
  }

  getMovieIds(uuid: string) {
    return this.qrMap.get(uuid);
  }
}
