import { Fragment, useState, useEffect } from "react";
import classes from "./EpisodesList.module.scss";

import EpisodesItem from "../EpisodesItem/EpisodesItem";

const EpisodesList = ({ episodes }) => {
  const [localFavorites, setLocalFavorites] = useState({});

  const handleFavor = (id) => {
    setLocalFavorites((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <Fragment>
      {!episodes.length && (
        <div className={classes.noResults}>
          <h2 className={classes.noResults__title}>No search results</h2>
          <div className={classes.noResults__img_wrapper}>
            <img
              className={classes.noResults__img}
              src="https://avatars.dicebear.com/api/bottts/40.png"
            />
          </div>
        </div>
      )}
      <div className={classes.episodesList}>
        {episodes.length > 0 &&
          episodes.map((episode) => {
            return (
              <EpisodesItem
                id={episode.id}
                key={episode.id}
                name={episode.name}
                date={episode.air_date}
                img_url={episode.img_url}
                onFavor={handleFavor}
                selected={localFavorites[episode.id]}
              />
            );
          })}
      </div>
    </Fragment>
  );
};

export default EpisodesList;
