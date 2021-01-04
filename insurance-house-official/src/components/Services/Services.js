import React from "react";
import * as styles from "./Services.module.scss";

const logoContent = [
  {
    logoIcon: "/images/logos/lic.png",
    logoTitle: "Life Insurance"
  },
  {
    logoIcon: "/images/logos/hdfc-deposits.png",
    logoTitle: "Company Deposits"
  },
  {
    logoIcon: "/images/logos/star-health.png",
    logoTitle: "Mediclaim"
  },
  {
    logoIcon: "/images/logos/bajaj-allianz.png",
    logoTitle: "Vehicle Insurance"
  }
];

const Services = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Services We Offer</p>
      <div className={styles["logo-container"]}>
        {logoContent.map((logo) => {
          return (
            <div key={logo.Title} className={styles["logo-box"]}>
              <img
                src={process.env.PUBLIC_URL + logo.logoIcon}
                className={styles.img}
              />
              <p className={styles.description}>{logo.logoTitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
