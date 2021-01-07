import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import * as styles from "./ResetPasswordLink.module.scss";

const sendResetPasswordLink = (event, email) => {
  event.preventDefault();
  axios
    .post("https://insurance-house-official-back.herokuapp.com/send-mail", {
      email: email
    }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Cookies.get("token")
      },
      withCredentials: true
    })
    .then((response) => {
      if (response.data.result === "Email sent") {
        alert("Password reset link has been sent to this email address");
      }
      window.location.href = "/insurance-house-official";
    })
    .catch((err) => {
      console.log(err);
      alert(
        "There was an error in processing the request. Please try again after some time."
      );
    });
}
const ResetPasswordLink = () => {
  const [email, setEmail] = React.useState("");
  return (
       <div>
        <Header/>
            <div className={styles.form}>
            <h2 className={styles.heading}>Reset Password</h2>
            <p className={styles.description}>Enter email address to reset the password</p>
            <input className={styles.email} type="email" onChange={(e) => setEmail(e.target.value)}/>
            <button className={styles["reset-button"]} onClick={(e) => sendResetPasswordLink(e, email)}>SEND MAIL</button>
           </div>
           <Footer/>
    </div>
  )
}

export default ResetPasswordLink;
