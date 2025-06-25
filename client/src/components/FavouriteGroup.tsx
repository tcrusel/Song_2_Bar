import { useState } from "react";
import dislikeIcon from "../../public/images/dislike.png";
import likeIcon from "../../public/images/like.png";
import "./FavouriteGroup.css";

function FavouriteGroup() {
  const [isfavourite, setIsFavourite] = useState(false);
  const [isPoPuped, setisPoPuped] = useState(false);

  return (
    <>
      <div className="container-Favourite">
        <button
          type="button"
          onClick={() => {
            setIsFavourite(!isfavourite);
            setisPoPuped(true);
            setTimeout(() => setisPoPuped(false), 3000);
          }}
        >
          <img
            src={isfavourite ? likeIcon : dislikeIcon}
            alt={
              isfavourite
                ? "icon quand c'est favorisé"
                : "icon quand ce n'est pas favorisé"
            }
            width="30px"
            height="auto"
          />
        </button>
        {isPoPuped && (
          <div className="popup">
            {isfavourite
              ? "Groupe ajouté aux favoris"
              : " Groupe retiré des favoris"}
          </div>
        )}
      </div>
    </>
  );
}

export default FavouriteGroup;
