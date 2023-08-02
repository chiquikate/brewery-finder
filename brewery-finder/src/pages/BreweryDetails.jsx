import "./css files/BreweryDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhone,
  faLaptop,
  faLeftLong,
} from "@fortawesome/free-solid-svg-icons";

import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// import { useState, useCallback, useEffect } from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

function BreweryDetails() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  console.log(data);

  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/v1/breweries/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="brewery-page-container">
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <div className="back-btn">
          <FontAwesomeIcon icon={faLeftLong} style={{ color: "#ffefcd" }} />{" "}
          Back
        </div>
      </NavLink>
      <div className="indiv-details">
        <p className="i-name">
          <strong>{data.name}</strong>
        </p>
        <p className="i-address">
          <FontAwesomeIcon
            icon={faLocationArrow}
            style={{ color: "#ffefcd" }}
          />
          {data.address_1}
          <p className="i-address2">
            {data.city}, {data.state}, {data.postal_code}, {data.country}
          </p>
        </p>
        <p className="i-number">
          <FontAwesomeIcon icon={faPhone} style={{ color: "#ffefcd" }} />
          {data.phone}
        </p>
        <p className="i-website">
          <FontAwesomeIcon icon={faLaptop} style={{ color: "#ffefcd" }} />
          {data.website_url}
        </p>
        <p className="brewery-type">
          <strong>Brewery Type:</strong> {data.brewery_type}
        </p>
      </div>
    </div>
  );
}

export default BreweryDetails;
