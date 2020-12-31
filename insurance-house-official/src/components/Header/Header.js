import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './Header.module.scss';

const toggleNavigationMenu = () => {
  const nav = document.querySelector('nav');
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}

const Header = () => {
  return (
       <div className={styles['navigation-bar']}>
      <header className={styles.logo}>THE INSURANCE <span>HOUSE</span></header>
      <div className={styles['hamburger-menu']} onClick={toggleNavigationMenu}>
        <div></div>
        <div></div>
        <div></div>
       </div>
       <nav className={styles.navbar}>
        <ul className={styles['nav-list-items']}>
            <li><Link to='/insurance-house-official'>Home</Link></li>
            <li><a href="#">Life Insurance</a></li>
            <li><a href="#">Mediclaim</a></li>
            <li><a href="#">Company Deposits</a></li>
            <li><a href="#">Vehicle Insurance</a></li>
        </ul>
        <span className={styles.login}><Link to='/login'>LOGIN</Link></span>
       </nav>
       </div>
  )
}

export default Header;
