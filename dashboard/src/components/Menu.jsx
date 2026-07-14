import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/", icon: "bi-speedometer2" },
    { name: "Orders", path: "/orders", icon: "bi-card-list" },
    { name: "Holdings", path: "/holdings", icon: "bi-briefcase" },
    { name: "Positions", path: "/positions", icon: "bi-graph-up-arrow" },
    { name: "Funds", path: "/funds", icon: "bi-wallet2" },
    { name: "Profile", path: "/profile", icon: "bi-person-circle" },
  ];

  return (
    <div className="d-flex flex-column p-3 h-100 bg-white">
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none border-bottom pb-3 w-100">
        <span className="fs-4 text-primary fw-bold">Kite</span>
      </Link>
      <ul className="nav nav-pills flex-column mb-auto mt-3 gap-2">
        {navItems.map((item) => (
          <li className="nav-item" key={item.name}>
            <Link
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? "active bg-primary text-white" : "text-dark"}`}
            >
              <i className={`bi ${item.icon} me-2`}></i>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
