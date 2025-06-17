import { useState } from "react";
import dislikeIcon from "../../public/images/dislike.png";
import likeIcon from "../../public/images/like.png";
import "./Favorite.css";

function Favorite() {
  const [isfavorite, setIsFavorite] = useState(false);
  const [showPoPup, setShowPoPup] = useState(false);

  return (
    <>
      <div className="container-Favorite">
        <button
          type="button"
          onClick={() => {
            setIsFavorite(!isfavorite);
            setShowPoPup(true);
            setTimeout(() => setShowPoPup(false), 3000);
          }}
        >
          <img
            src={isfavorite ? likeIcon : dislikeIcon}
            alt={
              isfavorite
                ? "icon quand c'est favorisé"
                : "icon quand ce n'est pas favorisé"
            }
            width="30px"
            height="auto"
          />
        </button>
        {showPoPup && (
          <div className="popup">
            {isfavorite
              ? "Bravo ! c'est ajouté aux favoris"
              : " Ca y est ! c'est retiré de tes favoris"}
          </div>
        )}
      </div>
    </>
  );
}

export default Favorite;
