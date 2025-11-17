"use client";
import useStore from "./kurv/Favorits";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

const Favorite = ({ id, className = "" }) => {
  const { favorite, toggleFavorite } = useStore();

  if (favorite.includes(id)) {
    return (
      <MdFavorite
        className={className}
        onClick={() => toggleFavorite(id)}
        aria-label={`Unfavorite ${id}`}
      />
    );
  } else {
    return (
      <MdFavoriteBorder
        className={className}
        onClick={() => toggleFavorite(id)}
        aria-label={`Favorite ${id}`}
      />
    );
  }
};

export default Favorite;
