import React, { useState, useEffect } from "react";

import firebase from "./Firebase";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";

const AuthContext = React.createContext({
  user: {},
  auth: {},
  signIn: () => {},
  signOut: () => {},
  isLoggedIn: false,
  isAdmin: false,
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState("publishedDate");

  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  useEffect(() => {
    let email = "";
    auth.currentUser ? ({ email } = auth.currentUser) : null;
    if (user) {
      setIsLoggedIn(true);
    }
    if (email === "brettsmith212@gmail.com") {
      setIsAdmin(true);
    }
  }, [user]);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((res) => {
        if (res.ok) {
          return;
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((e) => {
        console.log("ERROR", e);
      });
  };

  const poop = () => {
    console.log("poop");
  };

  const signOut = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    return auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        auth: auth,
        signIn: signInWithGoogle,
        signOut: signOut,
        isLoggedIn: isLoggedIn,
        isAdmin: isAdmin,
        setSearch: setSearch,
        search: search,
        setOrderBy: setOrderBy,
        orderBy: orderBy,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
