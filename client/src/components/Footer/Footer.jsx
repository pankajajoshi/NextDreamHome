import React from "react";
import classes from "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>Find Dream Home</h2>
          <p>Dream Home Project</p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +123 456 789</span>
          <span>LinkedIn: </span>
          <span>GitHub: WebDevMania</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>State: Virginia</span>
          <span>City: Fairfax</span>
          <span>Current Location: Reston</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
