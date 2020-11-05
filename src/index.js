import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyDcoaTJr1K6PfTy8ylKI_9-m4j7VtPH8t8",
  authDomain: "nodemce.firebaseapp.com",
  databaseURL: "https://nodemce.firebaseio.com",
  projectId: "nodemce",
  storageBucket: "nodemce.appspot.com",
  messagingSenderId: "284670480170",
  appId: "1:284670480170:web:0b9a03e6f635b4cbcf9853",
  measurementId: "G-G7STTWM1NK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
