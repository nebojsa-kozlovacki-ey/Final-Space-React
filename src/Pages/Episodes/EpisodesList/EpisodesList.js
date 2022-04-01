import { Fragment, useState } from "react";
import classes from "./EpisodesList.module.scss";

import EpisodesItem from "../EpisodesItem/EpisodesItem";

const EpisodesList = ({ episodes }) => {
  const [localFavorites, setLocalFavorites] = useState({});

  const handleFavor = (item) => {
    const { id } = item;
    if (localFavorites[id]) {
      // episodeCtx.removeEpisode(id);
    } else {
      // episodeCtx.addEpisode(item);
    }

    setLocalFavorites((prevState) => ({
      ...prevState,
      [item.id]: !prevState[item.id],
    }));
  };

  return (
    <Fragment>
      {/* No result */}
      {!episodes.length && (
        <div className={classes.noResults}>
          <h2 className={classes.noResults__title}>No search results</h2>
          <div className={classes.noResults__img_wrapper}>
            <img
              className={classes.noResults__img}
              src="https://avatars.dicebear.com/api/bottts/40.png"
              alt="No results"
            />
          </div>
        </div>
      )}
      {/* List items */}
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
