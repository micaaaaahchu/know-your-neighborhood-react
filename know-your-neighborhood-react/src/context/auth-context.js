import React, { useEffect, useState } from "react";
import { getUserLoginAPI } from "../api/user-api";

export const AuthContext = React.createContext({
  userId: "",
  profile: {
    userId: "",
    name: "",
    email: "",
    imageUrl: "",
    address: "",
    phoneNumber: "",
  },
  stores: [
    {
      storeId: "",
      storeName: "",
      country: "",
      city: "",
      storeEmail: "",
      phoneNumber: "",
    },
  ],
  roles: [],
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  refresh: () => {},
});

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  return storedToken;
};

export const AuthContextProvider = (props) => {
  const storedToken = retrieveStoredToken();
  const [token, setToken] = useState(storedToken);
  const [userProfile, setUserProfile] = useState(null);
  const [userStores, setUserStores] = useState([]);
  const [userRoles, setUserRoles] = useState([]);

  const userIsLoggedIn = !!token;

  useEffect(() => {
    if (token) {
      getUserLoginAPI(token)
        .then((res) => {
          setUserProfile(res.data.profile);
          setUserStores(res.data.stores);
          setUserRoles(res.data.roles);
        })
        .catch((err) => {
          console.log(err);
          logoutHandler();
        });
    }
  }, [token]);

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const refreshHandler = () => {
    getUserLoginAPI(token)
      .then((res) => {
        setUserProfile(res.data.profile);
        setUserStores(res.data.stores);
        setUserRoles(res.data.roles);
      })
      .catch((err) => {
        console.log(err);
        logoutHandler();
      });
  };

  const contextValue = {
    userId: userProfile?.userId,
    profile: userProfile,
    stores: userStores,
    roles: userRoles,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    refresh: refreshHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
