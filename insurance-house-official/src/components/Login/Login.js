import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import * as styles from './Login.module.scss';

const Login = () => {
  return (
        <div className={styles['footer-container']}>
            <Header/>
            <div className={styles.container}>
            <div className={styles.badge}>
              <img className={styles.person} src={ `${process.env.PUBLIC_URL}/images/person.png` }/>
            </div>
            <div className={styles.heading}>Member Login</div>
            <form className={styles.form}>
              <input type='email' placeholder='Email address'/>
              <input type='password' placeholder='Password'/>
              <a className={styles.link} href="">Forgot password?</a>
              <button className={styles.button}>LOGIN</button>
            </form>
            </div>
            <Footer/>
        </div>
  )
}

export default Login;
