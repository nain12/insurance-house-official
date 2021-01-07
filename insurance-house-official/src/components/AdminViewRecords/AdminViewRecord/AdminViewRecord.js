import React from "react";
/* import Cookies from "js-cookie"; */
import axios from "axios";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Loading from "../../Loading/Loading";

import * as styles from "./AdminViewRecord.module.scss";

export default class AdminViewRecord extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      id: props.location.state.id,
      name: props.location.state.name,
      email: props.location.state.email,
      policy: props.location.state.policy,
      uploads: null,
      comments: props.location.state.comments,
      isLoading: false
    }
  }

    handleChange = (e, field) => {
      this.setState({
        ...this.state,
        [field]: e.target.value
      })
    }

    updateData = (event) => {
      event.preventDefault();
      const data = {
        id: this.state.id,
        name: this.state.name,
        email: this.state.email,
        policy: this.state.policy,
        uploads: null,
        comments: this.state.comments
      }
      this.setState({
        ...this.state,
        isLoading: true
      })

      axios
        .post("https://insurance-house-official-back.herokuapp.com/update-user", data, {
          headers: {
            "Content-Type": "application/json",
            /*  Authorization: "Bearer " + Cookies.get("token") */
            Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token
          },
          withCredentials: true
        })
        .then((response) => {
          this.setState({
            ...this.state,
            isLoading: false
          })
          window.location.href = "/view-records"
        }).catch((err) => {
          console.log(err);
          this.setState({
            ...this.state,
            isLoading: false
          })
        })
    }

    render () {
      return (
        this.state.isLoading ? <Loading/> : (<div style={{ position: "relative" }}>
        <Header/>
        <div className={styles.badge}>
            <img
              className={styles.person}
              src={`${process.env.PUBLIC_URL}/images/person.png`}
            />
            <h2 className={styles.name}>{this.state.name}</h2>
        </div>
        <div className={styles.container}>
        <p className={styles.inputHeadings}>ID</p>
        <input type="text" defaultValue={this.state.id} className={styles.id} onChange={(e) => this.handleChange(e, "id")}/>
        <p className={styles.inputHeadings}>Name</p>
        <input type="text" defaultValue={this.state.name} className={styles.id} onChange={(e) => this.handleChange(e, "name")}/>
        <p className={styles.inputHeadings}>Email</p>
        <input type="text" defaultValue={this.state.email} className={styles.id} onChange={(e) => this.handleChange(e, "email")}/>
        <p className={styles.inputHeadings}>Policy</p>
        <input type="text" defaultValue={this.state.policy} className={styles.id} onChange={(e) => this.handleChange(e, "policy")}/>
        <p className={styles.inputHeadings}>Comments</p>
        <textarea defaultValue={this.state.comments} className={styles.id} rows={10} cols={10} onChange={(e) => this.handleChange(e, "comments")}></textarea>
        <button className={styles.button} onClick={(e) => this.updateData(e)}>UPDATE</button>
        </div>
        <Footer/>
        </div>
        ))
    }
}
