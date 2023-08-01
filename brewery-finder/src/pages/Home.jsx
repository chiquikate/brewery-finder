import "./css files/Home.css";

function Home({ data, setData }) {
  console.log(data);
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

      <div className="brewery-list">
        <ul>
          {data
            ? data.map((item, id) => (
                <div key={id} className="brewery">
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
  );
}

export default Home;
