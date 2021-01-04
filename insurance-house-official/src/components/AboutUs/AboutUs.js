import React from "react";
import * as styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.heading}>About Us</p>
        <div className={styles.photo}></div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          accumsan neque et tortor sodales ullamcorper. Sed orci ipsum, mollis
          nec massa ac, lacinia imperdiet est. Nam urna turpis, volutpat eu
          eleifend in efficitur vel tortor. Donec elit ipsum, consequat non
          mauris non, vulputate mollis orci. Vestibulum quis quam id velit
          interdum iaculis. In cursus porttitor lectus sed sodales. Integer
          blandit venenatis enim, vitae congue massa imperdiet quis. Aenean
          ligula libero, semper ac finibus id, tincidunt vel mauris.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
