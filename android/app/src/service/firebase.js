import * as firebase from "firebase";
​
export const initialize = () => firebase.initializeApp({
    apiKey: "AIzaSyBlM4BMtMP6pLPCRFgWvo_qEt8SiC7gN-k",
    authDomain: "chat-541cf.firebaseapp.com",
    databaseURL: "https://chat-541cf.firebaseio.com",
    projectId: "chat-541cf",
    storageBucket: "",
    messagingSenderId: "818017196549",
});