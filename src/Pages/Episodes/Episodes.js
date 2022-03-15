import classes from "./Episodes.module.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

import EpisodesList from "./EpisodesList/EpisodesList";

const Episodes = (props) => {
  const [episodes, setEpisodes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_FINAL_SPACE_API_URL}/episode`)
      .then((res) => {
        setEpisodes(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
      <EpisodesList
        episodes={episodes.filter((episode) =>
          episode.name.toLowerCase().includes(searchText.toLowerCase())
        )}
      />
    </div>
  );
};

export default Episodes;
