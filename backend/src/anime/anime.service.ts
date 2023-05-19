import { Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';

interface AnimeData {
  Page: {
    media: {
      id: number;
      title: { romaji: string; english: string; native: string };
      coverImage: { large: string };
      description: string;
    }[];
  };
}

@Injectable()
export class AnimeService {
  private readonly graphQLClient: GraphQLClient;

  constructor() {
    this.graphQLClient = new GraphQLClient('https://anilist.co/graphiql');
  }

  async searchAnime(query: string) {
    const queryStr = `
      query {
        Page (page: 1, perPage: 10) {
          media (search: "${query}") {
            id
            title {
              romaji
              english
              native
            }
            coverImage {
              large
            }
            description
          }
        }
      }
    `;

    const data = await this.graphQLClient.request<AnimeData>(queryStr);
    return data.Page.media;
  }
}
