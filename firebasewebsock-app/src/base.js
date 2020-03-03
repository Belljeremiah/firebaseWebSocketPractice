import * as firebase from 'firebase/app';
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAiacQjvNo0ub4wvSlVix7yCY3hUEGfb0I",
    authDomain: "websockpractice.firebaseapp.com",
    databaseURL: "https://websockpractice.firebaseio.com",
    projectId: "websockpractice",
    storageBucket: "websockpractice.appspot.com",
    messagingSenderId: "875616162392",
    appId: "1:875616162392:web:2dbf0f406cb052bed1702d"
});

export default app;
