import { useState } from "react";
import dislikeIcon from "/images/favourite_images/dislike.png";
import likeIcon from "/images/favourite_images/like.png";
import "./FavouriteButton.css";

type FavouriteButtonProps = {
  favouriteBar: () => Promise<void>;
};

function FavouriteButton({ favouriteBar }: FavouriteButtonProps) {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <button
      className="favourite-button"
      type="button"
      onClick={async () => {
        if (!isFavourite) {
          favouriteBar();
          setIsFavourite(true);
        } else {
          setIsFavourite(false);
        }
      }}
    >
      <img
        src={isFavourite ? likeIcon : dislikeIcon}
        alt={
          isFavourite
            ? "Icône de groupe favorisé"
            : "Icône de groupe non favorisé"
        }
        width="35"
        height="auto"
      />
    </button>
  );
}

export default FavouriteButton;
