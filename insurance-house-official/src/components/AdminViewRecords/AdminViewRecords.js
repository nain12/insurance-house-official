import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import * as styles from "./AdminViewRecords.module.scss";

export default class AdminViewRecords extends React.Component {
  constructor () {
    super();
    this.state = {
      records: []
    }
  }

  componentDidMount () {
    axios.get("https://insurance-house-official-back.herokuapp.com/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Cookies.get("token")
      }
    }).then(response => {
      console.log("data", response.data);
      this.setState({
        records: response.data.result
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Policy</th>
                        <th>Uploads</th>
                        <th>Comments</th>
                        <th>Action</th>
                    </tr>
                    {this.state.records && (
                      this.state.records.map(record => {
                        return (
                          <tr key={record.id}>
                           <td>{record.id}</td>
                           <td>{record.name}</td>
                           <td>{record.email}</td>
                           <td>{record.policy}</td>
                           <td>{record.uploads}</td>
                           <td>{record.comments}</td>
                           <td><Link to="/insurance-house-official">Edit</Link> <Link to="/insurance-house-official">Delete</Link></td>
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
