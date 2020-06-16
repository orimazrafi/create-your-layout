import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound__wrapper">
        <div className="notfound__content">
          <h1>Oops!</h1>
          <h2>404 - The Page can't be found</h2>
        </div>
        <Link to="/">Go TO Homepage</Link>
      </div>
    </div>
  );
};
