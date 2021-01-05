import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import * as styles from "./AdminViewRecords.module.scss";

export default class AdminViewRecords extends React.Component {
  constructor () {
    super();
    this.state = {
      records: ""
    }
  }

  componentDidMount () {
    axios.get("http://localhost:5000/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Cookies.get("token")
      }
    }).then(response => {
      console.log("data", response.data);
      this.setState({
        records: response.data
      })
    })
  }

  render () {
    return (
       <div className={styles.container}>
          <Header/>
          <h2 className={styles.heading}>Customer Details</h2>
          <input className={styles.text} type="text"/>
          <button className={styles.button}>SEARCH</button>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <th>ID</th>
                         <th>Email</th>
                         <th>Policy</th>
                    </tr>
                    {this.state.records && this.state.records.length > 0 && (
                      this.state.records.map(record => {
                        return (
                          <tr key={record.id}>
                           <td>{record.id}</td>
                           <td>{record.email}</td>
                           <td>{record.policy}</td>
                           </tr>
                        )
                      })
                    )}
                </tbody>
            </table>
            <Footer/>
        </div>
    )
  }
}
