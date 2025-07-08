import React from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <div className="navcontainer">
        <div className="navbar">
          <img src="/public/kite.png" />
          <div className="Links">
            <Link to="/dashboard">Dashboard</Link>

            <Link to="/orders">Orders</Link>

            <Link to="/holdings">Holdings</Link>

            <Link to="/positions">Positions</Link>

            <Link to="/bids">Bids</Link>

            <Link to="/funds">Funds</Link>

            <img
              src="./public/Screenshot 2025-06-27 035636.png"
              className="notifyimage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
