import { Controller, Get, Query } from '@nestjs/common';
import { AnimeService } from './anime.service';

@Controller('anime')
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  @Get('search')
  async searchAnime(@Query('query') query: string) {
    const animes = await this.animeService.searchAnime(query);
    return animes;
  }
}
