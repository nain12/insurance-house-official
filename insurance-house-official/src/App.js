import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Insurance from "./components/Insurance/Insurance";
import AdminViewRecords from "./components/AdminViewRecords/AdminViewRecords";
import AuthContext from "./util/auth-context";
import AdminViewRecord from "./components/AdminViewRecords/AdminViewRecord/AdminViewRecord";

import "./App.scss";

function App () {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
    <BrowserRouter>
      <Switch>
        <Route path="/insurance-house-official" component={Home} exact />
        <Route path="/login" component={Login} exact/>
        <Route path="/view-records" component={AdminViewRecords} exact/>
        <Route path="/view-record" component={AdminViewRecord} exact/>
        <Route
          path="/:name"
          render={(props) => <Insurance {...props} key={props.location.key} />}
        />
      </Switch>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

App.propTypes = {
  location: PropTypes.shape().isRequired
};

export default App;
