import "./css files/Wishlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhone,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";

function Wishlist(props) {
  console.log(props);
  return (
    <div className="wishlist-container">
      {props.wishlist.map((list) => {
        return (
          <div className="wishlist-card">
            <p className="i-name">
              <strong>{list.name}</strong>
            </p>
            <p className="i-address">
              <FontAwesomeIcon
                icon={faLocationArrow}
                style={{ color: "#ffefcd" }}
              />
              {list.address_1}
              <span className="i-address2">
                {list.city}, {list.state}, {list.postal_code}, {list.country}
              </span>
            </p>
            <p className="i-number">
              <FontAwesomeIcon icon={faPhone} style={{ color: "#ffefcd" }} />
              {list.phone}
            </p>
            <p className="i-website">
              <FontAwesomeIcon icon={faLaptop} style={{ color: "#ffefcd" }} />
              {list.website_url}
            </p>
            <p className="brewery-type">
              <strong>Brewery Type:</strong> {list.brewery_type}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Wishlist;
