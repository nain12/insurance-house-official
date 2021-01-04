import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";

import * as styles from "./Insurance.module.scss";

const Insurance = (props) => {
  const [data, setData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    const { name } = props.match.params;
    fetch(`${process.env.PUBLIC_URL}/data/${name}.json`).then((response) => {
      response.json().then((result) => {
        setData(result);
        setIsLoading(false);
      });
    });
  }, []);

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles["description-container"]}>
              <p className={styles.heading}>{data.title}</p>
              <p className={styles.description}>{data.description}</p>
            </div>
            <img
              className={styles.img}
              src={`${process.env.PUBLIC_URL}${data.illustration}`}
            />
            <div className={styles["logo-container"]}>
              <img
                className={styles.logo}
                src={`${process.env.PUBLIC_URL}${data.logo}`}
              />
            </div>
            <div className={styles["policies-container"]}>
              <p className={styles["policies-title"]}>Best Selling Policies</p>
              <ul className={styles.policies}>
                {data &&
                  data.policies &&
                  data.policies.map((policy) => {
                    return <li key={policy}>{policy}</li>;
                  })}
              </ul>
            </div>
            <div className={styles["customer-satisfaction-container"]}>
              <p className={styles["customer-satisfaction-title"]}>
                Customer satisfaction Rate
              </p>
              <p className={styles["customer-satisfaction-description"]}>
                {data.customerSatisfactionDescription}
              </p>
              <p className={styles.links}>
                For more information:{" "}
                <a href={data.informationLink}>{data.informationLink}</a>
              </p>
            </div>
            <div className={styles["customer-satisfaction-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/images/illustrations/customer-satisfaction.jpg`}
              />
            </div>
          </div>
          <div className={styles["footer-container"]}>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

Insurance.propTypes = {
  match: PropTypes.shape().isRequired
};

export default Insurance;
