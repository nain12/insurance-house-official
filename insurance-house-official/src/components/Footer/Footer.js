import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <p className={styles.text}>
        &#169;&nbsp;The Insurance House. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
