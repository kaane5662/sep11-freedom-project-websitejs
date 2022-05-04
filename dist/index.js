

console.log("mron")




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
getDocs(colRef)
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

// adding docs MAKE SURE ITS A NAME PROPERTY


// const addBookForm = document.querySelector('.addName')

// addBookForm.addEventListener('submit', (e) => {
//   e.preventDefault()

//   addDoc(colRef, {
//     password: addBookForm.passworld.value,
//     username: addBookForm.username.value,
//   })
//   .then(() => {
//     addBookForm.reset()
//   })
// })

// adding docs MAKE SURE ITS A NAME PROPERTY

  // const addAccount = document.querySelector('.signingUp')
  
  
  
  
  // addAccount.addEventListener('submit', (e) => {
  //   e.preventDefault()
  
  //   addDoc(colAccount, {
  //     password: addAccount.newPass.value,
  //     username: addAccount.newUser.value,
  //   })
  //   .then(() => {
  //     addAccount.reset()
  //   })
  // })

//signing the user in



// const signingUp = document.querySelector(".signUpOnly")

// document.querySelector(".login").addEventListener("click", function(){
  


  // const signupForm = document.querySelector('.signingUp')
  
  
  
 const signupForm = document.querySelector('.signingUp')
  
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
  
    const email = signupForm.email.value
    const password = signupForm.password.value
  
    createUserWithEmailAndPassword(auth, email, password)
      .then(cred => {
        console.log('user created:', cred.user)
        signupForm.reset()
      })
      .catch(err => {
        console.log(err.message)
      })
  })
  

  
// })

// const loginForm = document.querySelector('.loggingUp')




const loggingIn = document.querySelector(".login")
const loggingOut = document.querySelector(".logout")



//loging the user in

loggingIn.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = loggingIn.user.value
  const password = loggingIn.pass.value

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


// subscribing to auth changes
onAuthStateChanged(auth, (user) => {
  console.log('user status changed:', user)
})





