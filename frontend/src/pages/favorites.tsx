import React, { useState, useEffect } from "react";
import AnimeCard from "../components/AnimeCard";
import Layout from "../components/Layout";

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
}; // Note: Unused type definition ❌

const FavoritesPage: React.FC = () => {
  // Note: This component has 4 renders when it is not even receiving props or state updates ❌
  // It should be good to use React.memo/useMemo/useCallback to avoid unnecessary renders
  const [favorites, setFavorites] = useState<Anime[]>([]);

  useEffect(() => {
    const favoritesData = localStorage.getItem("favorites"); // Note: This is a good way to persist data, but it's not a good idea to use localStorage directly in the component ❌
    if (favoritesData) {
      const parsedFavorites: Anime[] = JSON.parse(favoritesData);
      setFavorites(parsedFavorites);
    }
  }, []);

  const handleToggleFavorite = (anime: Anime) => {
    if (isFavorite(anime.id)) {
      // Remove anime from favorites
      const updatedFavorites = favorites.filter(
        (favAnime) => favAnime.id !== anime.id
      );
      setFavorites(updatedFavorites);
    } else {
      // Add anime to favorites
      const updatedFavorites = [...favorites, anime];
      setFavorites(updatedFavorites);
    }
  };

  const isFavorite = (animeId: number) => {
    // Note: isFavorite is a good name for this function but it's located in the wrong place ❌ (should be declared outside of the component or above)
    return favorites.some((favAnime) => favAnime.id === animeId); // Note: some is a good alternative to find ✅
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
