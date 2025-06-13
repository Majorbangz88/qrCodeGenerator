// import { ApiProperty } from '@nestjs/swagger';
//
// export class CreateMovieDto {
//   @ApiProperty({ example: 'Avatar' })
//   title: string;
//
//   @ApiProperty({ example: '2009' })
//   year: string;
//
//   @ApiProperty({ example: 'PG-13', required: false })
//   rated?: string;
//
//   @ApiProperty({ example: '18 Dec 2009', required: false })
//   released?: string;
//
//   @ApiProperty({ example: '162 min' })
//   runtime: string;
//
//   @ApiProperty({ example: ['Action', 'Adventure', 'Fantasy'], type: [String] })
//   genres: string[];
//
//   @ApiProperty({ example: 'James Cameron' })
//   director: string;
//
//   @ApiProperty({ example: 'James Cameron', required: false })
//   writer?: string;
//
//   @ApiProperty({ example: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang', required: false })
//   actors?: string;
//
//   @ApiProperty({ example: 'A paraplegic marine dispatched to the moon Pandora...', required: false })
//   plot?: string;
//
//   @ApiProperty({ example: 'English, Spanish', required: false })
//   language?: string;
//
//   @ApiProperty({ example: 'USA, UK', required: false })
//   country?: string;
//
//   @ApiProperty({ example: 'Won 3 Oscars. Another 80 wins & 121 nominations.', required: false })
//   awards?: string;
//
//   @ApiProperty({
//     example: 'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
//     required: false
//   })
//   posterUrl?: string;
//
//   @ApiProperty({ example: '83', required: false })
//   metascore?: string;
//
//   @ApiProperty({ example: '7.9', required: false })
//   imdbRating?: string;
//
//   @ApiProperty({ example: '890,617', required: false })
//   imdbVotes?: string;
//
//   @ApiProperty({ example: 'tt0499549', required: false })
//   imdbID?: string;
//
//   @ApiProperty({ example: 'movie', required: false })
//   type?: string;
//
//   @ApiProperty({ example: true, required: false })
//   response?: boolean;
//
//   @ApiProperty({
//     example: [
//       'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
//       'https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg'
//     ],
//     type: [String],
//     required: false
//   })
//   images?: string[];
//
//   @ApiProperty({ type: 'string', format: 'binary', required: false })
//   posterFile?: Express.Multer.File;
// }

export class CreateMovieDto {
  title: string;
  year: string;
  rated?: string;
  released?: string;
  runtime: string;
  genres: string[];
  director: string;
  writer?: string;
  actors?: string;
  plot?: string;
  language?: string;
  country?: string;
  awards?: string;
  metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID?: string;
  type?: string;
  response?: boolean;
  // Local file paths for upload
  localPosterPath: string;
  localImagePaths: string[];
}
