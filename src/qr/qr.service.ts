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
    const randomId = uuidv4();
    this.currentUrl = `${process.env.BASE_URL}/movies/${randomId}`;
    this.currentQrCode = QRCode.toDataURL(this.currentUrl);
    console.log(this.currentQrCode)
    console.log(this.currentUrl)
  }

  getCurrentQrCode() {
    return {
      qrCode: this.currentQrCode,
      url: this.currentUrl
    };
  }
}
