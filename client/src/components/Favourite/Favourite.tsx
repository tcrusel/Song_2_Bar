import { useState } from "react";
import dislikeIcon from "../../public/images/dislike.png";
import likeIcon from "../../public/images/like.png";
import "./Favourite.css";

function Favourite() {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className="container-Favourite">
      <button
        type="button"
        onClick={() => {
          setIsFavourite(!isFavourite);
        }}
      >
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
    </div>
  );
}

export default Favourite;
