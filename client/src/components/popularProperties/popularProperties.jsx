import React from "react";
import { Link } from "react-router-dom";
import classes from "../popularProperties/popuplarProperties.css";
import img1 from "../../assets/realestatebeach.jpg";
import img2 from "../../assets/singlefamily.jpg";
import img3 from "../../assets/villa.png";

const popularProperties = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Different types of properties</h5>
          <h2>Best type of properties for you</h2>
        </div>
        <div className={classes.properties}>
          <Link
            to={`/properties?type=beach&state=0&priceRange=1`}
            className={classes.property}
          >
            <img src={img1} />
            <div className={classes.quantity}>34 properties</div>
            <h5>Beach properties</h5>
          </Link>
          <Link
            to={`/properties?type=singleFamily&state=1&priceRange=1`}
            className={classes.property}
          >
            <img src={img2} />
            <div className={classes.quantity}>65 properties</div>
            <h5>SingleFamily properties</h5>
          </Link>
          <Link
            to={`/properties?type=villa&state=2&priceRange=1`}
            className={classes.property}
          >
            <img src={img3} />
            <div className={classes.quantity}>72 properties</div>
            <h5>Villa properties</h5>
          </Link>
          <Link
            to={`/properties?type=townHouse&state=2&priceRange=1`}
            className={classes.property}
          >
            <img src={img3} />
            <div className={classes.quantity}>72 properties</div>
            <h5>Villa properties</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default popularProperties;
