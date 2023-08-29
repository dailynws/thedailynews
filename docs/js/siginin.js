import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js';

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
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submitBtn');
  const googleBtn = document.getElementById('googleBtn');

  const urlParams = new URLSearchParams(window.location.search);
  const redirectUrl = urlParams.get('redirect');

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (redirectUrl) {
          window.location.href = decodeURIComponent(redirectUrl);
        } else {
          // Redirect to a default page if no redirect URL is captured
          window.location.href = 'https://thedailynews.ink/v2-home'; // Replace with your default page URL
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log('EMAIL/PASSWORD ERROR!', errorMessage);
      });
  });

  googleBtn.addEventListener('click', (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then(() => {
        if (redirectUrl) {
          window.location.href = decodeURIComponent(redirectUrl);
        } else {
          // Redirect to a default page if no redirect URL is captured
          window.location.href = 'https://thedailynews.ink/v2-home'; // Replace with your default page URL
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log('GOOGLE SIGN IN ERROR!', errorMessage);
      });
  });
});
