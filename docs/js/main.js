import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js';
import { getAuth, signInWithRedirect, onAuthStateChanged, signOut, GoogleAuthProvider, inMemoryPersistence, browserSessionPersistence, setPersistence } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js';

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

// Function to update login button and user profile picture
function updateLoginButton(user) {
  const loginButton = document.getElementById('loginButton'); // Replace with your login button ID
  const userMenuButton = document.getElementById('pfpButton');
  const userProfilePicture = document.getElementById('pfpImg');

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
      window.location.href = 'https://thedailynews.ink/v2'; // Replace with your login page URL
    });
  }
}

// Set the desired persistence type
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Update the login/logout button and user profile picture based on the authentication state
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const idTokenResult = await user.getIdTokenResult();
          
          // Check if the 'disabled' claim is true
          if (idTokenResult.claims.disabled) {
            // Show the overlay if the user's account is disabled
            document.getElementById('overlay').style.display = 'block';
            window.location.href = 'https://thedailynews.ink/v2-disabled';
            // Hide other user-related elements
            document.getElementById('loginButton').style.display = 'none';
            document.getElementById('pfpButton').style.display = 'none';
            document.getElementById('pfpImg').style.display = 'none';
          } else {
            updateLoginButton(user);
            const userMenuButton = document.getElementById('pfpButton');
            const userProfilePicture = document.getElementById('pfpImg');
        
            userMenuButton.style.display = 'block';
            userProfilePicture.src = user.photoURL;
          }
        } catch (error) {
          console.error('Error getting ID token result:', error);
        }
      } else {
        // User is not logged in
        updateLoginButton(null);
        const userMenuButton = document.getElementById('pfpButton');
        const userProfilePicture = document.getElementById('pfpImg');
      
        userMenuButton.style.display = 'none';
        userProfilePicture.src = ''; // Clear the source to hide the image
      }
    });
  })
  .catch((error) => {
    console.error('Error setting persistence:', error);
  });