import React from 'react';
import * as styles from './ContactUs.module.scss';

const ContactUs = () => {
  return (
      <>
    <p className={styles.heading}>Contact Us</p>
       <div className={styles.container}>
            <div className={styles['contact-form']}>
            <form>
                <label id="name">Name</label>
                <input type="text"/>
                <label id="address">Address</label>
                <input type="text"/>
                <label id="email">Email</label>
                <input type="text"/>
                <button>SEND MESSAGE</button>
            </form>
            </div>
            <div className={styles['contact-info']}>
             <ul>
                 <li><i className="fa fa-twitter"></i><a href="#">twitter.com</a></li>
                 <li><i className="fa fa-facebook"></i><a href="#">facebook.com</a></li>
                 <li><i className="fa fa-instagram"></i><a href="#">instagram.com</a></li>
                 <li><i className="fa fa-envelope"></i><p>deepuvalecha27@gmail.com</p></li>
                 <li><i className="fa fa-home"></i><p>Office No.1, Laxmi Apartment, Baba Dholuram Darbar Road, Near Satyam Medical Store, Ulhasnagar- 421 001.</p></li>
             </ul>
            </div>
       </div>
       </>
  )
}

export default ContactUs;
