import classes from "./Episodes.module.scss";
import React, { useState } from "react";
import EpisodesList from "./EpisodesList/EpisodesList";
import useSWR from "../../Hooks/useSWR";

const Episodes = (props) => {
  const [episodes, status] = useSWR("series/getEpisodes", "episodes");
  const [searchText, setSearchText] = useState("");
  const searchHandler = (event) => setSearchText(event.target.value);

  return (
    <div className={classes.episodes}>
      <h2 className="page-title">Episodes</h2>
      <div className={classes.episodes__search}>
        <input
          type="search"
          className={classes.episodes__input}
          placeholder="Search episodes title"
          onChange={searchHandler}
        />
      </div>
      {episodes.length && (
        <EpisodesList
          episodes={episodes.filter((episode) =>
            episode.name.toLowerCase().includes(searchText.toLowerCase())
          )}
        />
      )}
    </div>
  );
};

export default Episodes;
