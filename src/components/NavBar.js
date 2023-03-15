import React, { useContext } from "react";
import { FaBookOpen, FaMoon, FaSun } from "react-icons/fa";
import Switch from "react-switch";
import ThemeContext from "../context/ThemeContext";
import FontContext from "../context/FontContext";
const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { fontChange, font } = useContext(FontContext);

  return (
    <div className="nav--bar">
      <div className="nav-bar__list">
        <ul className="nav-bar__list-ul">
          <div className="nav--bar__logo">
            <li className="list-item">
              <FaBookOpen className="fa-book" />
            </li>
          </div>
          <div className="list-item-right">
            <li className="list-item">
              <select name="fonts" id={font} onChange={fontChange}>
                <option value="Montserrat" className="Montserrat">
                  Montserrat
                </option>
                <option value="roboto" className="roboto">
                  Roboto
                </option>
                <option value="poppins" className="poppins">
                  Poppins
                </option>
              </select>
            </li>
            <li className="list-item flex">
              <Switch checked={theme === "dark"} onChange={toggleTheme} />
              <label>{theme === "light" ? <FaSun /> : <FaMoon />}</label>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
