import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js';
import { getAuth, signInWithRedirect } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyDtrP8PX_1n_q0qQvMvs_llbpfZ03IjyV0",
    authDomain: "auth.thedailynews.ink",
    databaseURL: "https://myalphaproject-fa903-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "myalphaproject-fa903",
    storageBucket: "myalphaproject-fa903.appspot.com",
    messagingSenderId: "625346257628",
    appId: "1:625346257628:web:0f274e5d64b55ac9100a19",
    measurementId: "G-NXVSPGLJZC"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

signInWithRedirect(auth, provider);