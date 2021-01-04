import React from "react";

const AuthContext = React.createContext({ isAuthenticated: false, setAuthenticated: (_auth) => {} });

export default AuthContext;
