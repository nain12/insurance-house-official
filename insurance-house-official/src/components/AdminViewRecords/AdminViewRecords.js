import React from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
/*
import * as styles from './AdminViewRecords.module.scss'; */

export default class AdminViewRecords extends React.Component {
  constructor () {
    super();
    this.state = {
      records: ""
    }
  }

  componentDidMount () {
    axios.get("http://localhost:5000/users").then(response => {
      console.log("data", response.data);
      this.setState({
        records: response.data
      })
    })
  }

  render () {
    return (
       <div>
          <Header/>
            <table>
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
