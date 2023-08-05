import Logo from "../assets/MIL.png";
import "./css files/Heading.css";

function Heading() {
  return (
    <>
      <div className="navbar-brand">
        <img src={Logo} className="logo" />
        <h2 className="heading-1">
          Find your favorite local brewery at your area
        </h2>
      </div>
    </>
  );
}

export default Heading;
