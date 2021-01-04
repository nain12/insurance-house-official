import React from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../util/auth-context";
import * as styles from "./Header.module.scss";

const toggleNavigationMenu = () => {
  const nav = document.querySelector("nav");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
};

const Header = () => {
  const { isAuthenticated } = React.useContext(AuthContext);
  return (
    <div className={styles["navigation-bar"]}>
      <header className={styles.logo}>
        THE INSURANCE <span>HOUSE</span>
      </header>
      <div className={styles["hamburger-menu"]} onClick={toggleNavigationMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles["nav-list-items"]}>
          <li>
            <Link to="/insurance-house-official">Home</Link>
          </li>
          <li>
            <Link to="/life-insurance">Life Insurance</Link>
          </li>
          <li>
            <Link to="/mediclaim">Mediclaim</Link>
          </li>
          <li>
            <Link to="/company-deposits">Company Deposits</Link>
          </li>
          <li>
            <Link to="/vehicle-insurance">Vehicle Insurance</Link>
          </li>
        </ul>
        <span className={styles.login}>
          <Link to="/login">{ isAuthenticated ? "LOGOUT" : "LOGIN"}</Link>
        </span>
      </nav>
    </div>
  );
};

export default Header;
