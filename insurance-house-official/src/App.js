import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Insurance from "./components/Insurance/Insurance";
import ResetPasswordLink from "./components/ResetPasswordLink/ResetPasswordLink";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import AdminViewRecords from "./components/AdminViewRecords/AdminViewRecords";
import AdminViewRecord from "./components/AdminViewRecords/AdminViewRecord/AdminViewRecord";
import AuthContext from "./util/auth-context";

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
        <Route path="/reset-password-link" component={ResetPasswordLink} exact/>
        <Route path="/reset-password" component={ResetPassword} exact/>
        <Route
          path="/:name"
          render={(props) => <Insurance {...props} key={props.location.key} />}
        />
        <Redirect to="/insurance-house-official" from="/"/>
      </Switch>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

App.propTypes = {
  location: PropTypes.shape().isRequired
};

export default App;
