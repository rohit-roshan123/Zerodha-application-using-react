import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <div className="navcontainer">
        <div className="navbar">
          <img src="/public/kite.png" />
          <div className="Links">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Orders
            </NavLink>

            <NavLink
              to="/holdings"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Holdings
            </NavLink>

            <NavLink
              to="/positions"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Positions
            </NavLink>

            <NavLink
              to="/bids"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Bids
            </NavLink>

            <NavLink
              to="/funds"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Funds
            </NavLink>

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
