import React from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AuthContext from "../../util/auth-context";
import Loading from "../Loading/Loading";

import * as styles from "./Login.module.scss";

export default class Login extends React.Component {
  static contextType = AuthContext;
  constructor () {
    super();
    this.state = {
      email: "",
      password: "",
      isLoading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event, field) {
    this.setState({
      [field]: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    this.setState({ isLoading: true });
    axios
      .post("https://insurance-house-official-back.herokuapp.com/login", {
        email: this.state.email,
        password: this.state.password
      }, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      .then((response) => {
        if (response.data.email) {
          this.context.setIsAuthenticated(true, () => {
            this.setState({ isLoading: false });
          });
          window.localStorage.setItem("user", JSON.stringify(response.data));
          this.props.history.replace("/view-records");
        } else {
          this.setState({ isLoading: false });
          alert("Invalid email address or password");
          window.location.href = "/login";
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false });
        alert(
          "There was an error in processing the request. Please try again after some time."
        );
      });
  }

  render () {
    return (
    <div className={styles["footer-container"]}>
       <Header />
        { this.state.isLoading ? <Loading/> : (
        <>
        <div className={styles.container}>
          <div className={styles.badge}>
            <img
              className={styles.person}
              src={`${process.env.PUBLIC_URL}/images/person.png`}
            />
          </div>
          <div className={styles.heading}>Member Login</div>
          <form className={styles.form}>
            <input
              type="email"
              placeholder="Email address"
              value={this.state.email}
              onChange={(e) => this.handleChange(e, "email")}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => this.handleChange(e, "password")}
              required
            />
            <a className={styles.link} href="">
              Forgot password?
            </a>
            <button
              className={styles.button}
              onClick={(e) => this.handleSubmit(e)}
            >
              LOGIN
            </button>
          </form>
        </div>
      </>
        )}
         <Footer />
    </div>
    );
  }
}
