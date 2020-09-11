import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({

    apiKey: "AIzaSyCNhuz1bIos7gVoukFoZoUFVaiPaQ1gWw0",
    authDomain: "dailydiary-a175f.firebaseapp.com",
    databaseURL: "https://dailydiary-a175f.firebaseio.com",
    projectId: "dailydiary-a175f",
    storageBucket: "dailydiary-a175f.appspot.com",
    messagingSenderId: "658711207595",
    appId: "1:658711207595:web:ab7913c344f5335e87e1ee",
    measurementId: "G-29T53D7338"

})



export default firebaseConfig;