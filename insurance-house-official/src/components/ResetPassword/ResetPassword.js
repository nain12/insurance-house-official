import React from "react";
import axios from "axios";
/* import Cookies from "js-cookie"; */
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";

import styles from "./ResetPassword.module.scss";

export default class ResetPassword extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isLoading: true
        }
    }

    componentDidMount () {
        const token = this.props.location.search.split("?")[1];
        axios
            .post("/reset-password", {
                token: token
            }, {
                headers: {
                    "Content-Type": "application/json"

                },
                withCredentials: true
            })
            .then((response) => {
                if (response.data.result === "Authenticated") {
                    this.setState({ isLoading: false });
                }
            })
            .catch((err) => {
                this.setState({ isLoading: false });
                console.log(err);
                alert(
                    "There was an error in processing the request. Please try again after some time."
                );
                window.location.href = "/insurance-house-official";
            });
    }

    setResetPassword = () => {
        this.setState({ isLoading: true })
        axios
            .post("/change-password", {
                email: this.state.email,
                password: this.state.password
            }, {
                headers: {
                    "Content-Type": "application/json"
                    /* Authorization: "Bearer " + Cookies.get("token") */
                    /* Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token */
                },
                withCredentials: true
            })
            .then((response) => {
                if (response.data.result === "Password Changed") {
                    this.setState({ isLoading: false });
                }
                alert("Password reset successful");
                window.location.href = "/login";
            })
            .catch((err) => {
                this.setState({ isLoading: false });
                console.log(err);
                alert(
                    "There was an error in processing the request. Please try again after some time."
                );
                window.location.href = "/insurance-house-official";
            });
    }

    render () {
        return (
            this.state.isLoading ? <Loading/> : (
                <div style={{ position: "relative" }}>
                    <Header/>
                    <div className={styles.form}>
                        <h2 className={styles.heading}>Reset Password</h2>
                        <p className={styles.description}>Enter your email address and your new password to reset your password</p>
                        <p className={styles["label-email"]}>Email address</p>
                        <input className={styles.email} type="email" onChange={(e) => this.setState({ email: e.target.value })}/>
                        <p className={styles["label-password"]}>New Password</p>
                        <input className={styles.email} type="password" onChange={(e) => this.setState({ password: e.target.value })}/>
                        <button className={styles["reset-button"]} onClick={(e) => this.setResetPassword(e)}>RESET PASSWORD</button>
                    </div>
                    <Footer/>
                </div>
            )
        )
    }
}
