import classes from "./CharactersItem.module.scss";

const Character = ({ name, img_url, species }) => {
  return (
    <div className={classes.character}>
      <div className={classes.character__img_wrapper}>
        <img
          className={classes.character__img}
          src={img_url}
          alt={`${name} image`}
        />
      </div>
      <p className={classes.character__name}>{name}</p>
      <p className={classes.character__species}>Species: {species}</p>
    </div>
  );
};

export default Character;
