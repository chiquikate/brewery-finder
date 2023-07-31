import "./css files/Home.css";

import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

function Home() {
  const URL = "https://api.openbrewerydb.org/v1/breweries";

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="search"
          className="user-input"
          placeholder="Enter city here.."
        />
        <br />
        <button className="searchBtn">Search</button>
      </div>

      <div className="brewery-list"></div>
    </div>
  );
}

export default Home;
