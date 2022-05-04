




console.log("good ebening")


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

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'userInfo');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   console.log(cityList)
// }




// collection ref
const colRef = collection(db, 'userInfo')


const colAccount = collection(db, 'accounts')


console.log("Hello from index.js")

// get collection data
getDocs(colAccount)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let userInfo = []
    snapshot.docs.forEach(doc => {
      userInfo.push({ ...doc.data(), id: doc.id })
    })
    console.log(userInfo)
  })
  .catch(err => {
    console.log(err.message)
  })