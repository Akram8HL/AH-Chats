import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDUBidsfNS8dpfCXW1D7RRphBBgPn7cCiY",
  authDomain: "ah-chats-16640.firebaseapp.com",
  projectId: "ah-chats-16640",
  storageBucket: "ah-chats-16640.appspot.com",
  messagingSenderId: "1072984852093",
  appId: "1:1072984852093:web:a0cab6298400b660941314"
}).auth()
