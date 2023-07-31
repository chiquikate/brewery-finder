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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
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
