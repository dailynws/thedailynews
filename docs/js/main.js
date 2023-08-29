import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js';
import { getRedirectResult, signInWithRedirect, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js';

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

getRedirectResult(auth)
  .then((result) => {
    function updateLoginButton(user) {
      const loginButton = document.getElementById('loginButton');
      if (user) {
        // User is logged in
        loginButton.textContent = "Log out ←⠀";
        userMenuButton.style.display = "block"; // Show user menu button
        userProfilePicture.src = user.photoURL; // Set user profile picture
    
        loginButton.addEventListener('click', () => {
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
        loginButton.textContent = "Log in →";
        userMenuButton.style.display = "none"; // Hide user menu button
    
        loginButton.addEventListener('click', () => {
          // Redirect the user to the login page
          signInWithRedirect(auth, provider);
        });
      }
    };

    // Update the login/logout button and user profile picture based on the authentication state
    onAuthStateChanged(auth, (user) => {
      updateLoginButton(user);
          const userMenuButton = document.getElementById('pfpButton');
    const userProfilePicture = document.getElementById('pfpImg');
    
    if (user) {
        userMenuButton.style.display = 'block';
        userProfilePicture.src = user.photoURL;
    } else {
        userMenuButton.style.display = 'none';
        userProfilePicture.src = ''; // Clear the source to hide the image
    }
  });
});

// Handle login button click
const loginButton = document.getElementById('loginButton'); // Replace with the actual ID of your login button
if (loginButton) {
  loginButton.addEventListener('click', () => {
    // Redirect the user to the login page
    signInWithRedirect(auth, provider);
    window.location.href = 'https://thedailynews.ink/v2';
  });
}