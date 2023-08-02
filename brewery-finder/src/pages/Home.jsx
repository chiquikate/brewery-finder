import "./css files/Home.css";
import { NavLink } from "react-router-dom";

// import { Container, Row, Col } from "react-bootstrap";

function Home({ data, filtered, setFiltered }) {
  const filterHandler = (e) => {
    setFiltered(
      data.filter(
        (f) =>
          f.city.toLowerCase().includes(e.target.value) ||
          f.country.toLowerCase().includes(e.target.value) ||
          f.state.toLowerCase().includes(e.target.value)
      )
    );
  };
  return (
    <div className="container">
      <div className="search-container">
        <input
          type="search"
          className="user-input"
          placeholder="Enter city, state or country here.."
          onChange={filterHandler}
        />
        <br />
        <button className="searchBtn">Search</button>
      </div>

      <div className="brewery-list-container">
        <div className="brewery-list">
          <ul>
            {filtered
              ? filtered.map((item, id) => (
                  <div key={id} className="card">
                    <div className="details-container">
                      <li className="name">
                        <strong>{item.name}</strong>
                      </li>
                      <li className="address">{item.address_1}</li>
                    </div>
                    <NavLink to={`brewery-details/${item.id}`}>
                      <button className="detailsBtn">View on Map</button>
                    </NavLink>
                  </div>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
