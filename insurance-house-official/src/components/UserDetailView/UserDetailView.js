import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import * as styles from "./UserDetailView.module.scss";

const UserDetailView = () => {
  return (
     <div style={{ position: "relative", height: "200vh" }}>
        <Header/>
        <div className={styles.badge}>
            <img
              className={styles.person}
              src={`${process.env.PUBLIC_URL}/images/person.png`}
            />
            <h2 className={styles.name}>Nainy Sewaney</h2>
        </div>
        <div className={styles.container}>
        <p className={styles.inputHeadings}>ID</p>
        <p className={styles.id}>1</p>
        <p className={styles.inputHeadings}>Name</p>
        <p className={styles.id}>Nainy Sewaney</p>
        <p className={styles.inputHeadings}>Email</p>
        <p className={styles.id}>nainysewaney@gmail.com</p>
        <p className={styles.inputHeadings}>Policy</p>
        <p className={styles.id}>Jeevan Anand</p>
        <p className={styles.inputHeadings}>Comments</p>
        <p className={styles.id}>sdhkjshdkshfjdhf</p>
        {/* <label className={styles.inputHeadings} htmlFor="downloads">Downloads</label>
        <p className={styles.id}>file names</p> */}
        </div>
        <Footer/>
        </div>
  )
}

export default UserDetailView;
