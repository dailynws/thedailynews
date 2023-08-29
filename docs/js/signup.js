import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js'
import { } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js"

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

  submitBtn.addEventListener('click',(e) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert('Sucess lolololol');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode);
      // ..
});
});
