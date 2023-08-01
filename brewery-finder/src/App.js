import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import BreweryDetails from "./pages/BreweryDetails";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.openbrewerydb.org/v1/breweries")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home data={data} setData={setData} />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
        <Route path="/brewery-details" element={<BreweryDetails />} />
      </>
    )
  );

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
