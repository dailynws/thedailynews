import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithRedirect } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyDtrP8PX_1n_q0qQvMvs_llbpfZ03IjyV0",
  authDomain: "myalphaproject-fa903.firebaseapp.com",
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

// Function to update the login/logout button and user profile picture
function updateLoginButton(user) {
  const loginOrOutButton = document.getElementById('loginorout');
  const userMenuButton = document.getElementById('user-menu-button');
  const userProfilePicture = document.getElementById('imgPfp');

  if (user) {
    // User is logged in
    loginOrOutButton.textContent = "Log out ←⠀";
    userMenuButton.style.display = "block"; // Show user menu button
    userProfilePicture.src = user.photoURL; // Set user profile picture

    loginOrOutButton.addEventListener('click', () => {
      signOut(auth)
        .then(() => {
          console.log('User signed out successfully.');
        })
        .catch((error) => {
          console.error('Error signing out:', error);
        });
    });
  } else {
    // User is not logged in
    loginOrOutButton.textContent = "Log in →";
    userMenuButton.style.display = "none"; // Hide user menu button

    loginOrOutButton.addEventListener('click', () => {
      // Redirect the user to the login page
      signInWithRedirect(auth, provider);
    });
  }
}

// Update the login/logout button and user profile picture based on the authentication state
onAuthStateChanged(auth, (user) => {
    updateLoginButton(user);
    const userMenuButton = document.getElementById('user-menu-button');
    const userProfilePicture = document.getElementById('imgPfp');
    
    if (user) {
        userMenuButton.style.display = 'block';
        userProfilePicture.src = user.photoURL;
    } else {
        userMenuButton.style.display = 'none';
        userProfilePicture.src = ''; // Clear the source to hide the image
    }
});
