import useSWR from "../../Hooks/useSWR";
import classes from "./Characters.module.scss";
import Character from "./Character";

const Characters = (props) => {
  const [characters, status] = useSWR("series/getCharacters", "characters");
  const [episodes, pera] = useSWR("series/getEpisodes", "episodes");

  return (
    <div className={classes.characters}>
      <h2 className="page-title">Characters</h2>
      {status} - {pera}
      <div className={classes.characters__list}>
        {characters &&
          characters.length &&
          characters.map((character) => (
            <Character key={character.id} {...character} />
          ))}
      </div>
    </div>
  );
};

export default Characters;
