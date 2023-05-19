import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SearchBar from '../components/SearchBar';
import AnimeCard from '../components/AnimeCard';
import Layout from '../components/Layout';

type Anime = {
  id: number;
  title: { english: string };
  coverImage: { large: string };
  description: string;
};

type AnimeCardProps = {
  anime: Anime;
  onToggleFavorite: (anime: Anime) => void;
  isFavorite: boolean;
};

const IndexPage: React.FC = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [favorites, setFavorites] = useState<Anime[]>([]); // Cambio en el tipo de dato
  const router = useRouter();

  useEffect(() => {
    const favoritesData = localStorage.getItem('favorites');
    if (favoritesData) {
      const parsedFavorites: Anime[] = JSON.parse(favoritesData);
      setFavorites(parsedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = async (query: string) => {
    const response = await fetch(`http://localhost:3001/anime/search?query=${query}`);
    const results: Anime[] = await response.json();
    setAnimes(results);
  };

  const handleToggleFavorite = (anime: Anime) => {
    if (favorites.some((favAnime) => favAnime.id === anime.id)) {
      const updatedFavorites = favorites.filter((favAnime) => favAnime.id !== anime.id);
      setFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, anime];
      setFavorites(updatedFavorites);
    }
  };

  const handleViewFavorites = () => {
    router.push('/favorites');
  };

  const isFavorite = (animeId: number) => {
    return favorites.some((favAnime) => favAnime.id === animeId);
  };

  return (
    <Layout title="Home">
      <SearchBar onSearch={handleSearch} />
      {animes.map((anime: Anime) => (
        <AnimeCard
          key={anime.id}
          anime={anime}
          onToggleFavorite={handleToggleFavorite}
          isFavorite={isFavorite(anime.id)}
        />
      ))}
      <button  onClick={handleViewFavorites}>View Favorites</button>
    </Layout>
  );
};

export default IndexPage;
