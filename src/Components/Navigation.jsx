import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/Portfolio-logo1.png"
import {GiHamburgerMenu} from "react-icons/gi"

export default function Navigation() {
    const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button
                    onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}
                    >
                    <GiHamburgerMenu />
                </button>
            </div>
                <nav className="navigation">
                    <img src={Logo} alt="Logo" className="logo" />
                    <NavLink className="nav nav1" to="/">Om mig</NavLink>
                    <NavLink className="nav nav1" to="/projekter">Mine projekter</NavLink>
                    <NavLink className="nav nav1" to="/kontakt">Kontakt mig</NavLink>
                </nav>
        </div>
    )
}