import "./Group.css";
import imageGroup from "../assets/images/images_group_page/group_image.png";
import infoIcon from "../assets/images/images_group_page/info_icon.png";
import unfavoriteIcon from "../assets/images/images_group_page/unfavorite_icon.png";

function Group() {
  return (
    <>
      <section className="group-information">
        <h1>GROUP</h1>
        <div className="group-title">
          <img
            src={infoIcon}
            alt="icone info du groupe"
            width="30"
            height="auto"
          />
          <h2>Les Dingos</h2>
          <button type="button" className="icon-favourite">
            {
              <img
                src={unfavoriteIcon}
                alt="L'icone étoile pour noter le groupe"
                width="30"
                height="auto"
              />
            }
          </button>
          <button type="button" className="icon-favourite">
            {
              <img
                src={unfavoriteIcon}
                alt="L'icone étoile pour noter le groupe"
                width="30"
                height="auto"
              />
            }
          </button>
        </div>
        <div className="group-articles">
          <article>
            <img
              src={imageGroup}
              alt="poster du groupe"
              width="contain"
              height="auto"
            />
          </article>
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              numquam inventore, ea accusamus quaerat sit esse est ipsa ad
              expedita ipsum saepe molestias possimus rem. Veritatis esse iure
              maiores corporis? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Animi numquam inventore, ea accusamus quaerat
              sit esse est ipsa ad expedita ipsum saepe molestias possimus rem.
              Veritatis esse iure maiores corporis? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Animi numquam inventore, ea
              accusamus quaerat sit esse est ipsa ad expedita ipsum saepe
              molestias possimus rem. Veritatis esse iure maiores corporis?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              numquam inventore, ea accusamus quaerat sit esse est ipsa ad
              expedita ipsum saepe molestias possimus rem. Veritatis esse iure
              maiores corporis? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Animi numquam inventore, ea accusamus quaerat
              sit esse est ipsa ad expedita ipsum saepe molestias possimus rem.
              Veritatis esse iure maiores corporis?
            </p>
          </article>
        </div>
      </section>
      <section className="bar-caroussel">
        <p>Caroussel de bars à venir</p>
      </section>
    </>
  );
}

export default Group;
