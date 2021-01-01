import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
/* import Footer from '../Footer/Footer'; */
import Loading from '../Loading/Loading'

import * as styles from './Insurance.module.scss';

const Insurance = (props) => {
  const [data, setData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    const { name } = props.match.params;
    fetch(`${process.env.PUBLIC_URL}/data/${name}.json`).then(response => {
      response.json().then(result => {
        setData(result);
        setIsLoading(false);
      });
    })
  }, [])

  return (
        <div>
        <Header/>
        {isLoading
          ? <Loading/>
          : (<>
          <div className={styles.container}>
         <div className={styles['description-container']}>
         <p className={styles.heading}>
             {data.title}
            </p>
         <p className={styles.description}>{data.description}</p>
         </div>
         <img className={styles.img} style={{ width: window.innerWidth > 515 ? data.imgWidth : data.imgMobileWidth, height: window.innerWidth > 515 ? data.imgHeight : data.imgMobileHeight }} src={`${process.env.PUBLIC_URL}/${data.illustration}`}/>
         </div>
         <div className={styles['logo-container']}>
         <img className={styles.logo} src={`${process.env.PUBLIC_URL}/${data.logo}`}/>

         <p className={styles['policies-title']}>Best Selling Policies</p>
         <ul className={styles.policies}>
          {data && data.policies && data.policies.map(policy => {
            return <li key={policy}>{policy}</li>
          })}
         </ul>
         </div>
        <div className={styles['customer-satisfaction-rate-container']}>
        <img src={`${process.env.PUBLIC_URL}/images/illustrations/CustomerSatisfactionRate.png`}/>
        <p>Customer satisfaction Rate</p>
        </div>
        {/* <Footer/> */}
        </>)}
        </div>
  )
}

Insurance.propTypes = {
  match: PropTypes.shape().isRequired
};

export default Insurance;