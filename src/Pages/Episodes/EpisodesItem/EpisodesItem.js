import classes from "./EpisodesItem.module.scss";

const EpisodesItem = (props) => {
  let { name, img_url, id, customClass, selected, onFavor } = props;
  customClass = customClass || "";

  return (
    <div className={`${classes.episodesItem} ${customClass}`} key={id}>
      <div className={classes.episodesItem__img_wrapper}>
        <img
          className={classes.episodesItem__img}
          src={img_url}
          alt={`Episode ${name} image`}
        />
      </div>
      <div className={classes.episodesItem__content}>
        <p className={classes.episodesItem__title}>
          <strong>{name}</strong>
        </p>
      </div>
      <div className={classes.episodesItem__favorite}>
        <i
          onClick={() => onFavor(id)}
          className={`fa-solid fa-star ${classes.icon} ${
            selected ? `${classes.active}` : ""
          }`}
        ></i>
      </div>
    </div>
  );
};

export default EpisodesItem;
