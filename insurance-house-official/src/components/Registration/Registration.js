import React from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";

import styles from "./Registration.module.scss";

export default class Registration extends React.Component {
    constructor () {
        super();
        this.state = {
            name: "",
            email: "",
            policy: "",
            password: "",
            isLoading: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    handleChange (event, field) {
        this.setState({
            [field]: event.target.value
        });
    }

    addUser (event) {
        event.preventDefault();
        this.setState({ isLoading: true });
        axios
            .post("/add-user", {
                name: this.state.name,
                policy: this.state.policy,
                email: this.state.email,
                password: this.state.password
            }, {
                withCredentials: true
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((response) => {
                if (response.data.result === "User added successfully!") {
                    this.setState({ isLoading: false });
                    alert("Successfully registered.");
                    window.location.herf = "/login";
                } else {
                    this.setState({ isLoading: false });
                    alert("Could not register");
                    window.location.href = "/registration";
                }
            })
            .catch((err) => {
                console.log(err);
                this.setState({ isLoading: false });
                alert(
                    "There was an error in processing the request. Please try again after some time."
                );
                window.location.href = "/insurance-house-official";
            });
    }

    render () {
        return this.state.isLoading ? <Loading/> : (
            <div className={styles.container}>
                <Header/>
                <div className={styles.badge}>
                    <img
                        className={styles.person}
                        src={`${process.env.PUBLIC_URL}/images/person.png`}
                    />
                    <h2 className={styles.heading}>Registration Form</h2>
                </div>
                <form className={styles.form}>
                    <label className={styles.name}>Name</label>
                    <input className={styles["name-input"]} type="text" value={this.state.name} onChange={(e) => this.handleChange(e, "name")}/>
                    <label className={styles.email}>Email</label>
                    <input className={styles["email-input"]} type="email" value={this.state.email} onChange={(e) => this.handleChange(e, "email")}/>
                    <label className={styles.policy}>Policy Name</label>
                    <input className={styles["policy-input"]} type="text" value={this.state.policy} onChange={(e) => this.handleChange(e, "policy")}/>
                    <label className={styles.password}>Password</label>
                    <input className={styles["password-input"]} type="password" value={this.state.password} onChange={(e) => this.handleChange(e, "password")}/>
                    <button className={styles.register} type="submit" onClick={(e) => this.addUser(e)}>REGISTER</button>
                </form>
                <Footer/>
            </div>
        )
    }
}
