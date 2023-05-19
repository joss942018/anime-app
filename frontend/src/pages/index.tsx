import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import AnimeCard from '../components/AnimeCard';
import styles from '../styles/IndexPage.module.css';

type Anime = {
  id: number;
  title: { english: string };
  coverImage: { large: string };
  description: string;
};

const IndexPage: React.FC = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);

  const handleSearch = async (query: string) => {
    const response = await fetch(`http://localhost:3001/anime/search?query=${query}`);
    const results: Anime[] = await response.json();
    setAnimes(results);
  };

  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <div className={styles['anime-list']}>
        {animes.map((anime: Anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
