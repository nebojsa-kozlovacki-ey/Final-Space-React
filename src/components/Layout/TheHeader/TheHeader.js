import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
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
        </ul>
      </nav>
    </header>
  );
};

export default TheHeader;
