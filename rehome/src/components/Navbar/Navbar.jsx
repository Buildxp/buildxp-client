import { React, useState } from "react";
import Logo from "./assets/Hanover 1logo.svg";
import "./Navbar.scss";


export default function Navbar() {
  const [signupOpen, setSignupOpen] = useState(false);

  const handleClick = () => {
    setSignupOpen(true);
  };

  return (
    <div className="navbar-main">
      <div className="nav-left">
        <div className="navlogo">
          <img src={Logo} style={{ height: "3.6rem" }} />
        </div>
        <div className="navlist">
          <div className="items">Home</div>
          <div className="items">About Us</div>
          <div className="items">Feedback</div>
          <div className="items">Child laws</div>
        </div>
      </div>
      <div className="nav-right">
        <div className="items-right">EN</div>
        <div className="items-right" onClick={handleClick}>
          Login
        </div>
        <div className="items-right">Help</div>
      </div>
    
    </div>
  );
}
