import { Injectable } from '@nestjs/common';
import { MoviesService } from '../movies/movies.service';
import * as QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class QrService {
  private currentQrCode: string;
  private currentUrl: string;

  constructor(private readonly moviesService: MoviesService) {
    this.refreshQrCode();
    setInterval(() => this.refreshQrCode(), 10000); // Refresh every 10 seconds
  }

  private async refreshQrCode() {
    const baseUrl = process.env.FRONTEND_URL

    const randomId = uuidv4();
    this.currentUrl = `${baseUrl}/movies/${randomId}`;
    this.currentQrCode = QRCode.toDataURL(this.currentUrl);
  }

  getCurrentQrCode() {
    return {
      qrCode: this.currentQrCode,
      url: this.currentUrl
    };
  }
}
