import React, { useState, useEffect } from 'react';
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

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Anime[]>([]);

  useEffect(() => {
    const favoritesData = localStorage.getItem('favorites');
    if (favoritesData) {
      const parsedFavorites: Anime[] = JSON.parse(favoritesData);
      setFavorites(parsedFavorites);
    }
  }, []);

  const handleToggleFavorite = (anime: Anime) => {
    if (isFavorite(anime.id)) {
      // Remove anime from favorites
      const updatedFavorites = favorites.filter((favAnime) => favAnime.id !== anime.id);
      setFavorites(updatedFavorites);
    } else {
      // Add anime to favorites
      const updatedFavorites = [...favorites, anime];
      setFavorites(updatedFavorites);
    }
  };

  const isFavorite = (animeId: number) => {
    return favorites.some((favAnime) => favAnime.id === animeId);
  };

  return (
    <Layout title="Favorites">
      <h1>My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorite animes found.</p>
      ) : (
        <div>
          {favorites.map((anime: Anime) => (
            <AnimeCard
              key={anime.id}
              anime={anime}
              onToggleFavorite={handleToggleFavorite}
              isFavorite={isFavorite(anime.id)}
            />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default FavoritesPage;
