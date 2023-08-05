import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <div className="root-layout">
        <div className="nav-bar">
          <Heading />
          <NavBar />
        </div>
      </div>

      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
