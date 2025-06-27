import { useState } from "react";
import dislikeIcon from "../../public/images/dislike.png";
import likeIcon from "../../public/images/like.png";
import "./FavouriteGroup.css";

function FavouriteGroup({
  userId,
  musicGroupId,
}: { userId: number; musicGroupId: number }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [isPoPuped, setIsPoPuped] = useState(false);

  const handleClick = async () => {
    const method = isFavourite ? "DELETE" : "POST";

    try {
      const response = await fetch(
        "http://localhost:3310/api/favourite_music_group",
        {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: userId,
            music_group_id: musicGroupId,
          }),
        },
      );

      if (response.ok) {
        setIsFavourite(!isFavourite);
        setIsPoPuped(true);
        setTimeout(() => setIsPoPuped(false), 3000);
      } else {
        console.error("Erreur API :", await response.json());
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  };

  return (
    <div className="container-Favourite">
      <button type="button" onClick={handleClick}>
        <img
          src={isFavourite ? likeIcon : dislikeIcon}
          alt={
            isFavourite
              ? "icon quand c'est favorisé"
              : "icon quand ce n'est pas favorisé"
          }
          width="30px"
          height="auto"
        />
      </button>
      {isPoPuped && (
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
