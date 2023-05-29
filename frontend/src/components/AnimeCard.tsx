import React, { useState } from "react";
import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import styles from "../styles/AnimeCard.module.css";

type AnimeCardProps = {
  anime: {
    id: number;
    title: { english: string };
    coverImage: { large: string };
    description: string;
  }; // Note: Anime type definition is duplicated in other files ❌
  onToggleFavorite: (anime: AnimeCardProps["anime"]) => void;
  isFavorite: boolean;
};

const AnimeCard: React.FC<AnimeCardProps> = ({
  anime,
  onToggleFavorite,
  isFavorite,
}) => {
  const handleToggleFavorite = () => {
    onToggleFavorite(anime);
  };

  const coverImageUrl = anime.coverImage?.large || "";

  return (
    <Box className={styles["anime-card"]}>
      <Image
        className={styles["anime-image"]}
        src={coverImageUrl}
        alt={anime.title?.english || ""}
      />

      <Box className={styles["anime-content"]}>
        <Heading as="h2" className={styles["anime-title"]}>
          {anime.title?.english || ""} // Note: This is a good way to handle
          nullish values ✅
        </Heading>

        <Text className={styles["anime-description"]}>
          {anime.description || ""}
        </Text>

        <Button
          onClick={handleToggleFavorite}
          colorScheme={isFavorite ? "red" : "gray"}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
      </Box>
    </Box>
  );
};

export default AnimeCard;
