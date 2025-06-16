import { Controller, Get, Param, Res } from '@nestjs/common';
import { QrService } from './qr.service';
import { MoviesService } from '../movies/movies.service';
import { Response } from 'express';

@Controller('qr')
export class QrController {
  constructor(
    private qrService: QrService,
    private moviesService: MoviesService,
  ) {}

  @Get()
  async getQr(@Res() res: Response) {
    const qr = await this.qrService.getCurrentQr();
    res.type('image/png');
    res.send(Buffer.from(qr.split(',')[1], 'base64'));
  }
}

@Controller('movies')
export class MoviePageController {
  constructor(
    private qrService: QrService,
    private moviesService: MoviesService,
  ) {}

  @Get(':uuid')
  async renderMovies(@Param('uuid') uuid: string, @Res() res: Response) {
    const ids = this.qrService.getMovieIds(uuid);
    if (!ids) {
      return res.status(404).send('Invalid QR link');
    }
    const movies = await this.moviesService.getMoviesByIds(ids);
    let html = `<h1>Movies</h1>`;
    for (const m of movies) {
      html += `<div><h3>${m.title}</h3><img src="${m.posterUrl}" width="200"/></div>`;
    }
    res.send(html);
  }
}
