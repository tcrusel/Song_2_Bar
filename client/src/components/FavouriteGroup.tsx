import { useEffect, useState } from "react";
import dislikeIcon from "../../public/images/dislike.png";
import likeIcon from "../../public/images/like.png";
import "./FavouriteGroup.css";

type FavouriteGroupInterface = {
  user_id: number;
  music_group_id: number;
};

function FavouriteGroup({ user_id, music_group_id }: FavouriteGroupInterface) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    if (!user_id || !music_group_id) return;

    fetch(
      `${import.meta.env.VITE_API_URL}/api/favourite_music_group?user_id=${user_id}&music_group_id=${music_group_id}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setIsFavourite(data.isFavourite);
      })
      .catch((err) => console.error("Erreur fetch:", err));
  }, [user_id, music_group_id]);

  const handleToggleFavourite = () => {
    const newStatus = !isFavourite;

    if (isFavourite && newStatus) {
      console.log("Déjà dans les favoris, aucune action nécessaire.");
      return;
    }

    setIsFavourite(newStatus);
    setIsPopupVisible(true);

    fetch(`${import.meta.env.VITE_API_URL}/api/favourite_music_group`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, music_group_id }),
    }).catch((err) => console.error("Erreur lors du toggle:", err));

    setTimeout(() => setIsPopupVisible(false), 3000);
  };
  return (
    <div className="container-Favourite">
      <button type="button" onClick={handleToggleFavourite}>
        <img
          src={isFavourite ? likeIcon : dislikeIcon}
          alt={
            isFavourite
              ? "Icône de groupe favorisé"
              : "Icône de groupe non favorisé"
          }
          width="30px"
          height="auto"
        />
      </button>

      {isPopupVisible && (
        <div className="popup">
          {isFavourite
            ? "Groupe ajouté aux favoris"
            : "Groupe retiré des favoris"}
        </div>
      )}
    </div>
  );
}

export default FavouriteGroup;
