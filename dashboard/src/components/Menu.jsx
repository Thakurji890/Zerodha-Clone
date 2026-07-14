import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menu, setMenu] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleMenuClick = ({ index }) => {
    setMenu(index);
  };

  const handleProfileClick = ({ index }) => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="menu-container">
      <img src="kite-logo.svg" alt="Kite Logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <p>Dashboard</p>
          </li>
          <li>
            <p>Orders</p>
          </li>
          <li>
            <p>Holdings</p>
          </li>
          <li>
            <p>Positions</p>
          </li>
          <li>
            <p>Funds</p>
          </li>
          <li>
            <p>Apps</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
