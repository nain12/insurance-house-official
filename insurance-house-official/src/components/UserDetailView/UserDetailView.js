import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "./UserDetailView.module.scss";

const UserDetailView = (props) => {
    console.log(props);
    return (
        <div style={{ position: "relative", height: "200vh" }}>
            <Header/>
            <div className={styles.badge}>
                <img
                    className={styles.person}
                    src={`${process.env.PUBLIC_URL}/images/person.png`}
                />
                <h2 className={styles.name}>{props.location.state.name}</h2>
            </div>
            <div className={styles.container}>
                <p className={styles.inputHeadings}>ID</p>
                <p className={styles.id}>{props.location.state.id}</p>
                <p className={styles.inputHeadings}>Name</p>
                <p className={styles.id}>{props.location.state.name}</p>
                <p className={styles.inputHeadings}>Email</p>
                <p className={styles.id}>{props.location.state.email}</p>
                <p className={styles.inputHeadings}>Policy</p>
                <p className={styles.id}>{props.location.state.policy}</p>
                <p className={styles.inputHeadings}>Comments</p>
                <p className={styles.id}>{props.location.state.comments}</p>
                {/* <label className={styles.inputHeadings} htmlFor="downloads">Downloads</label>
        <p className={styles.id}>file names</p> */}
            </div>
            <Footer/>
        </div>
    )
}

export default UserDetailView;
