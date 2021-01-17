import React from "react";
import axios from "axios";
/* import Cookies from "js-cookie"; */
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";

import * as styles from "./ResetPasswordLink.module.scss";

const sendResetPasswordLink = (event, email, setIsLoading) => {
  event.preventDefault();
  setIsLoading(true);
  axios
    .post("/send-mail", {
      email: email
    }, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
    .then((response) => {
      setIsLoading(false);
      if (response.data.result === "Email sent") {
        alert("Password reset link has been sent to this email address");
      }
      window.location.href = "/insurance-house-official";
    })
    .catch((err) => {
      setIsLoading(false);
      console.log(err);
      alert(
        "There was an error in processing the request. Please try again after some time."
      );
    });
}
const ResetPasswordLink = () => {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  return isLoading ? <Loading/> : (
       <div style={{ position: "relative" }}>
        <Header/>
            <div className={styles.form}>
            <p className={styles.description}>Forgot Password? Enter your email address below and we will send instructions to reset your password</p>
            <p className={styles.heading}>Email address</p>
            <input className={styles.email} type="email" onChange={(e) => setEmail(e.target.value)}/>
            <button className={styles["reset-button"]} onClick={(e) => sendResetPasswordLink(e, email, setIsLoading)}>SEND MAIL</button>
           </div>
           <Footer/>
    </div>
  )
}

export default ResetPasswordLink;
