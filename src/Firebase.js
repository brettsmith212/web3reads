import firebase from "firebase/compat/app";

let config = {
  apiKey: "AIzaSyA18RL1HiP5xlOKt72XhrgfjUqK2_X2Xoc",
  authDomain: "web3reads.firebaseapp.com",
  projectId: "web3reads",
  storageBucket: "web3reads.appspot.com",
  messagingSenderId: "1081296641884",
  appId: "1:1081296641884:web:823a801b0b70f7a6116b99",
  measurementId: "G-B3W25NXZXQ",
};

firebase.initializeApp(config);

export default firebase;
