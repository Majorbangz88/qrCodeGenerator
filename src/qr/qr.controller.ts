import { Controller, Get, Param, Render, Res } from '@nestjs/common';
import { QrService } from './qr.service';
import { MoviesService } from '../movies/movies.service';
import { Response } from 'express';

@Controller('api/qr')
export class QrController {
  constructor(private readonly qrService: QrService) {
  }

  @Get()
  getQrCode() {
    return this.qrService.getCurrentQrCode();
  }
}
