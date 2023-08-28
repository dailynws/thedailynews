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

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        window.location.href = 'https://thedailynews.ink/redirect/signup-emailpass-normal';
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log('EMAIL/PASSWORD ERROR!', errorMessage)
      });
  });

  googleBtn.addEventListener('click', (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        // Additional info can be obtained using getAdditionalUserInfo(result)
        window.location.href = 'https://thedailynews.ink/redirect/signup-google-normal';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('GOOGLE SIGN IN ERROR!', errorMessage)
      });
  });
});

passwordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      submitBtn.click();
    }
  });