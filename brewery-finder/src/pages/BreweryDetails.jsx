import "./css files/BreweryDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhone,
  faLaptop,
  faLeftLong,
  faThumbsUp,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

function BreweryDetails() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const [map, setMap] = useState(null);

  const latlong = {
    lat: parseFloat(data.latitude),
    lng: parseFloat(data.longitude),
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCq71N1GHDQWEhBF16jWgKY-pN4nM0fUFM",
  });

  const onLoad = useCallback(
    (map) => {
      const bounds = new window.google.maps.LatLngBounds(latlong);
      map.fitBounds(bounds);
      setMap(map);
    },
    [setMap, latlong]
  );

  const onUnmount = useCallback(
    (map) => {
      setMap(null);
    },
    [setMap]
  );

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
        <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#ffefcd" }} />
        <FontAwesomeIcon icon={faHeart} style={{ color: "#ffefcd" }} />
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

      <div className="google-maps-container">
        <div className="google-maps">
          {isLoaded ? (
            data.latitude &&
            data.longitude && (
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={latlong}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                <Marker position={latlong} />
              </GoogleMap>
            )
          ) : (
            <div>Google Map has an error.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BreweryDetails;
