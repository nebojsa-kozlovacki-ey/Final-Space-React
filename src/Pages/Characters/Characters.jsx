import useSWR from "../../Hooks/useSWR";
import classes from "./Characters.module.scss";
import CharacterItem from "./CharacterItem";
import { useEffect, useState } from "react";

const Characters = (props) => {
  const [characters, status] = useSWR("series/getCharacters", "characters");
  const [episodes, statusEpisodes] = useSWR("series/getEpisodes", "episodes");

  const [charactersMap, setCharactersMap] = useState({});

  useEffect(() => {
    if (characters.length > 0 && episodes.length > 0) {
      characters.forEach((character) => {
        charactersMap[character.id] = 0;
        setCharactersMap((prevState) => {
          return {
            ...prevState,
            [character.id]: 0,
          };
        });
      });

      episodes.forEach((episode) => {
        episode.characters.forEach((epChar) => {
          const idStr = epChar.split("/")[epChar.split("/").length - 1];
          setCharactersMap((prevState) => {
            return {
              ...prevState,
              [idStr]: prevState[idStr] + 1,
            };
          });
        });
      });
    }
  }, [characters, episodes]);

  return (
    <div className={classes.characters}>
      <h2 className="page-title">Characters</h2>
      <div className={classes.characters__list}>
        {characters.length &&
          characters.map((character) => (
            <CharacterItem
              key={character.id}
              {...character}
              episodeCount={charactersMap[character.id]}
            />
          ))}
      </div>
    </div>
  );
};

export default Characters;
