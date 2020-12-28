import React from 'react';
import * as styles from './Header.module.scss';

const Header = () => {
  return (
       <div className={styles['navigation-bar']}>
       <nav>
        <header className={styles.logo}>THE INSURANCE <span style={{ display: 'inline-block', margin: '0 0 4% 16%' }}>HOUSE</span></header>
        <ul className={styles['nav-list-items']}>
            <li>Home</li>
            <li>Life Insurance</li>
            <li>Mediclaim</li>
            <li>Company Deposits</li>
            <li>Vehicle Insurance</li>
        </ul>
        <span className={styles.login}>LOGIN</span>
       </nav>
       </div>
  )
}

export default Header;
