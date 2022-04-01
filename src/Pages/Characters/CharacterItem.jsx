import classesItem from "./CharactersItem.module.scss";

const Character = ({ name, img_url, species, episodeCount }) => {
  return (
    <div className={classesItem["character"]}>
      <div className={classesItem.character__img_wrapper}>
        <img
          className={classesItem.character__img}
          src={img_url}
          alt={`${name} image`}
        />
      </div>
      <div className={classesItem.content}>
        <p className={classesItem.character__row}>
          Episode count:
          <span className={classesItem.character__episode_count}>
            {episodeCount}
          </span>
        </p>
        <p className={classesItem.character__name}>{name}</p>
        <p className={classesItem.character__species}>Species: {species}</p>
      </div>
    </div>
  );
};

export default Character;
