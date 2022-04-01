import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import EpisodeContext from "../../../store/episode-context";
import classes from "./TheHeader.module.scss";

const TheHeader = (props) => {
  return (
    <header className={classes.header}>
      <nav className={classes.header__nav}>
        <ul className={classes.header__list}>
          <li className={classes.header__list_item}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={classes.header__list_item}>
            <NavLink to="/Episodes">Episodes</NavLink>
          </li>
          <li className={classes.header__list_item}>
            <NavLink to="/Characters">Characters</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TheHeader;
