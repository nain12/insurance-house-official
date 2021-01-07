import React from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../util/auth-context";
import * as styles from "./Header.module.scss";

const toggleNavigationMenu = () => {
  const nav = document.querySelector("nav");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
};

const getLoginComponent = (isLoggedInRef) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  isLoggedInRef.current = isAuthenticated;
}

const logoutHandler = (isLoggedInRef) => {
  isLoggedInRef.current = false;
  localStorage.clear();
}

const Header = () => {
  const { setIsAuthenticated } = React.useContext(AuthContext);
  const isLoggedInRef = React.useRef(false);
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
        <span className={styles.register}><Link to="/insurance-house-official">REGISTER</Link></span>
        <span className={styles.login}>
          { getLoginComponent(isLoggedInRef)}
          { JSON.parse(localStorage.getItem("user")) ? <Link to={"/insurance-house-official"} onClick={() => { logoutHandler(isLoggedInRef); setIsAuthenticated(false) } } >LOGOUT</Link> : <Link to={"/login"}>LOGIN</Link> }
        </span>
      </nav>
    </div>
  );
};

export default Header;
