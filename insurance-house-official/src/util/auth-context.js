import React from "react";

// eslint-disable-next-line no-unused-vars
const AuthContext = React.createContext({ isAuthenticated: false, setAuthenticated: (_auth) => {} });

export default AuthContext;
