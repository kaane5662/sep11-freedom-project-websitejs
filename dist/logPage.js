console.log("hello from logPage.js")


import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { getFirestore, collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjhE6EvE4Z_87veOHTiqpTMsDWD3Dbtps",
  authDomain: "freedom-project-858bd.firebaseapp.com",
  projectId: "freedom-project-858bd",
  storageBucket: "freedom-project-858bd.appspot.com",
  messagingSenderId: "286303704031",
  appId: "1:286303704031:web:d49b8f432d3d7123d12a6a",
  measurementId: "G-DNV9WRHR16"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth()

//selecting the login form
const loginForm = document.querySelector(".logIn")

//selecting the logOut button
const loggingOut = document.querySelector(".logout")



//loging the user in


loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = loginForm.userAccount.value
  const password = loginForm.userPass.value

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user logged in:', cred.user)
      loginForm.reset()
    })
    .catch(err => {
      console.log(err.message)
    })
})




//loging the user out

loggingOut.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      console.log('user signed out')
    })
    .catch(err => {
      console.log(err.message)
    })
})


//detecting auth changes

onAuthStateChanged(auth, (user) => {
  console.log('user status changed:', user)
})
