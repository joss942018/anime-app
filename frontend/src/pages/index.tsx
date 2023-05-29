import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SearchBar from "../components/SearchBar";
import AnimeCard from "../components/AnimeCard";
import Layout from "../components/Layout";

type Anime = {
  // Note: This type definition is used in multiple components, so it's better to declare it in a separate file and import it where it's needed ❌
  id: number;
  title: { english: string };
  coverImage: { large: string };
  description: string;
};

type AnimeCardProps = {
  // Note: Unused type definition ❌
  anime: Anime;
  onToggleFavorite: (anime: Anime) => void;
  isFavorite: boolean;
};

const IndexPage: React.FC = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [favorites, setFavorites] = useState<Anime[]>([]); // Cambio en el tipo de dato
  const router = useRouter();

  useEffect(() => {
    const favoritesData = localStorage.getItem("favorites");
    if (favoritesData) {
      const parsedFavorites: Anime[] = JSON.parse(favoritesData);
      setFavorites(parsedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites)); // Note: it would've been good to handle it as a custom hook ❌
  }, [favorites]);

  const handleSearch = async (query: string) => {
    const response = await fetch(
      `http://localhost:3001/anime/search?query=${query}`
    ); // Note: It's better to use environment variables instead of hardcoding the URL ❌
    const results: Anime[] = await response.json();
    setAnimes(results);
  };

  const handleToggleFavorite = (anime: Anime) => {
    // Note: This function is doing too much, it could re-use some logic/functions that already exist in other components ❌
    if (favorites.some((favAnime) => favAnime.id === anime.id)) {
      // Note: this same logic is used in isFavorite function, so it's better to use it instead of repeating the code ❌
      const updatedFavorites = favorites.filter(
        (favAnime) => favAnime.id !== anime.id
      );
      setFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, anime];
      setFavorites(updatedFavorites);
    }
  };

  const handleViewFavorites = () => {
    router.push("/favorites");
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
      <button onClick={handleViewFavorites}>View Favorites</button>
    </Layout>
  );
};

export default IndexPage;
