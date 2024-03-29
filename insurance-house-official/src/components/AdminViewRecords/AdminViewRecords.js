import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";

import styles from "./AdminViewRecords.module.scss";

export default class AdminViewRecords extends React.Component {
    constructor () {
        super();
        this.state = {
            records: [],
            isLoading: false,
            numberOfPages: []
        }
    }

    componentDidMount () {
        this.setState({
            ...this.state,
            isLoading: true
        })
        axios.get("/users?page=1", {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + Cookies.get("token")
            },
            withCredentials: true
        }).then(response => {
            console.log(response);
            this.setState({
                records: response.data.result,
                isLoading: false
            })
        }).catch(err => {
            this.setState({
                ...this.state,
                isLoading: false
            })
            console.log(err);
            alert("Could not fetch records");
        })
    }

    fetchPage (page) {
        this.setState({
            ...this.state,
            isLoading: true
        })
        axios.get(`/users?page=${page}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + Cookies.get("token")
            },
            withCredentials: true
        }).then(response => {
            this.setState({
                records: response.data.result,
                isLoading: false
            })
        }).catch(err => {
            this.setState({
                ...this.state,
                isLoading: false
            })
            console.log(err);
            alert("Could not fetch records");
        })
    }

    render () {
        return (
            this.state.isLoading ? <Loading/> : (<div className={styles.container}>
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
                                        <td><Link className={styles.edit} to={{
                                            pathname: "/view-record",
                                            state: record
                                        }}>Edit</Link> <Link className={styles.delete} to="/insurance-house-official">Delete</Link></td>
                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                </table>
                <div className={styles["pagination-container"]}>
                    <Link to={`/view-records${this.props.location.search}`} className={styles.pagination} onClick={() => this.fetchPage(1)}>1</Link>
                    {
                        this.state.numberOfPages.map((page, index) => {
                            return (
                                <Link to={`/view-records?page=${page}`} key={index} className={styles.pagination} onClick={() => this.fetchPage(page)}>{page}</Link>
                            )
                        })
                    }
                </div>
                <Footer/>
            </div>)
        )
    }
}
