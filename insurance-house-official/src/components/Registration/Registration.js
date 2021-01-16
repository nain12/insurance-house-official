import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import * as styles from "./Registration.module.scss";

export default class Registration extends React.Component {
  render () {
    return (
            <div className={styles.container}>
            <Header/>
              <div className={styles.badge}>
            <img
              className={styles.person}
              src={`${process.env.PUBLIC_URL}/images/person.png`}
            />
            <h2 className={styles.heading}>Registration Form</h2>
          </div>
          <form className={styles.form}>
            <label className={styles.name}>Name</label>
            <input className={styles["name-input"]} type="text"/>
            <label className={styles.email}>Email</label>
            <input className={styles["email-input"]} type="email"/>
            <label className={styles.policy}>Policy Name</label>
            <input className={styles["policy-input"]} type="text"/>
            <label className={styles.password}>Password</label>
            <input className={styles["password-input"]} type="password"/>
            <button className={styles.register} type="submit">REGISTER</button>
          </form>
          <Footer/>
            </div>
    )
  }
}
