import "./css files/Home.css";

// import { Container, Row, Col } from "react-bootstrap";

function Home({ data, filtered, setFiltered }) {
  console.log(data);
  const filterHandler = (e) => {
    setFiltered(
      data.filter((f) => f.city.toLowerCase().includes(e.target.value))
    );
  };
  return (
    <div className="container">
      <div className="search-container">
        <input
          type="search"
          className="user-input"
          placeholder="Enter city here.."
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
                    <li className="name">
                      <strong>{item.name}</strong>
                    </li>
                    <li className="address">{item.address_1}</li>
                    <button className="detailsBtn">View on Map</button>
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
