import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import GlobalStyles from "./components/styles/Global";
import NavBar from "./components/NavBar";
import Ribbon from "./components/Ribbon";
import Articles from "./components/Articles";

// Firebase Credentials
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyA18RL1HiP5xlOKt72XhrgfjUqK2_X2Xoc",
  authDomain: "web3reads.firebaseapp.com",
  projectId: "web3reads",
  storageBucket: "web3reads.appspot.com",
  messagingSenderId: "1081296641884",
  appId: "1:1081296641884:web:823a801b0b70f7a6116b99",
  measurementId: "G-B3W25NXZXQ",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  // Firebase Logged In
  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  const signOut = () => {
    return auth.signOut();
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <NavBar
          user={user}
          signInWithGoogle={signInWithGoogle}
          signOut={signOut}
        ></NavBar>
        <Ribbon user={user}></Ribbon>
        <Articles></Articles>
      </>
    </ThemeProvider>
  );
}

export default App;
