import { useEffect, useState } from "react";
import dislikeIcon from "/images/favourite_images/dislike.png";
import likeIcon from "/images/favourite_images/like.png";
import "./FavouriteButton.css";
import { useAuth } from "../../contexts/AuthContext";
import { useParams } from "react-router";

type FavouriteButtonProps = {
  favouriteBar?: () => Promise<void>;
  unfavouriteBar?: () => Promise<void>;
  favouriteEvent?: () => Promise<void>;
  unfavouriteEvent?: () => Promise<void>;
  favouriteMusicGroup?: () => Promise<void>;
  unfavouriteMusicGroup?: () => Promise<void>;
};

function FavouriteButton({
  favouriteBar,
  unfavouriteBar,
  favouriteEvent,
  unfavouriteEvent,
  favouriteMusicGroup,
  unfavouriteMusicGroup,
}: FavouriteButtonProps) {
  const [isFavourite, setIsFavourite] = useState(false);
  const { auth } = useAuth();
  const { id } = useParams();
  const userId = auth?.user.id;
  const barId = Number(id);

  useEffect(() => {
    const checkFavorites = async () => {
      if (!auth) return;
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/favourite_bar/${barId}`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          },
        );
        if (response.ok) {
          const result = await response.json();
          setIsFavourite(result.favorites);
        } else {
          console.error("Erreur lors de la récupération de la participation");
        }
      } catch (error) {
        console.error("Erreur réseau :", error);
      }
    };

    if (userId && barId) {
      checkFavorites();
    }
  }, [userId, barId, auth]);

  return (
    <button
      className="favourite-button"
      type="button"
      onClick={() => {
        if (favouriteBar && unfavouriteBar) {
          if (!isFavourite) {
            favouriteBar();
            setIsFavourite(true);
          } else {
            unfavouriteBar();
            setIsFavourite(false);
          }
        }
        if (favouriteEvent && unfavouriteEvent) {
          if (!isFavourite) {
            favouriteEvent();
            setIsFavourite(true);
          } else {
            unfavouriteEvent();
            setIsFavourite(false);
          }
        }
        if (favouriteMusicGroup && unfavouriteMusicGroup) {
          if (!isFavourite) {
            favouriteMusicGroup();
            setIsFavourite(true);
          } else {
            unfavouriteMusicGroup();
            setIsFavourite(false);
          }
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
        width="50"
        height="auto"
      />
    </button>
  );
}

export default FavouriteButton;
