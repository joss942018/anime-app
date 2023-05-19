import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';
import styles from '../styles/AnimeCard.module.css';

type AnimeCardProps = {
    anime: {
      id: number;
      title: { english: string };
      coverImage: { large: string };
      description: string;
    };
  };
  
  const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
    return (
      <Box className={styles['anime-card']}>
        <Image
          className={styles['anime-image']}
          src={anime.coverImage.large}
          alt={anime.title.english}
        />
  
        <Box className={styles['anime-content']}>
          <Heading as="h2" className={styles['anime-title']}>
            {anime.title.english}
          </Heading>
  
          <Text className={styles['anime-description']}>{anime.description}</Text>
        </Box>
      </Box>
    );
  };
  
  export default AnimeCard;

