import React, { useEffect } from "react";
import classes from "./Home.module.scss";
import axios from "axios";

const Home = (props) => {
  useEffect(() => {
    axios
      .get("/api")
      .then((result) => {
        console.log("RESULT : ", result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={classes.home}>
      {/* Description */}
      <p className={classes.home__content}>
        This is a React application for comedy space opera tv series Final Space
      </p>
      <p>
        You can view and search episodes, and learn more about each character
      </p>

      {/* Technologies Title */}
      <h3 className={`${classes.home__title} page-title`}>Built with</h3>

      {/* Technologies List */}
      <ul className={classes.home__list}>
        <li className={classes.list__item}>React</li>
        <li className={classes.list__item}>axios</li>
      </ul>
    </div>
  );
};

export default Home;
