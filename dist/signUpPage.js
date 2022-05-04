console.log("hello from signUp.js")


import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { getFirestore, collection, getDocs, addDoc, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
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






const user = auth.currentUser;

// const boi = firebase.firestore();




//selecting the signUp form
const signupForm = document.querySelector('.signingUp')
const dataBaseForm = document.querySelector('.signingUp')






document.querySelector(".signUpButton").addEventListener("click", function(){




  signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = signupForm.newUser.value
    const password = signupForm.newPass.value

    createUserWithEmailAndPassword(auth, email, password)
      .then(cred => {
        console.log('user created:', cred.user)
        
        
        const colAccount = doc(db, 'accounts', cred.user.uid)
        
      
    
            // dataBaseForm.addEventListener('submit', (e) => {
            //   e.preventDefault()
          
            //   addDoc(colAccount, {
            //     username: dataBaseForm.newUser.value,
            //     password: dataBaseForm.newPass.value,
            //   })
            //   .then(() => {
            //     dataBaseForm.reset()
            //   })
            // })
            
            
            
           var column1 = {
             r1: ["write here", "white", "black"],
             r2: ["write here", "white", "black"],
             r3: ["write here", "white", "black"],
             r4: ["write here", "white", "black"],
             r5: ["write here", "white", "black"],
             r6: ["write here", "white", "black"]
            }
            
            var column2 = {
             r1: ["write here", "white", "black"],
             r2: ["write here", "white", "black"],
             r3: ["write here", "white", "black"],
             r4: ["write here", "white", "black"],
             r5: ["write here", "white", "black"],
             r6: ["write here", "white", "black"]
            }
            
            var column3 = {
             r1: ["write here", "white", "black"],
             r2: ["write here", "white", "black"],
             r3: ["write here", "white", "black"],
             r4: ["write here", "white", "black"],
             r5: ["write here", "white", "black"],
             r6: ["write here", "white", "black"]
            }
            
            var column4 = {
             r1: ["write here", "white", "black"],
             r2: ["write here", "white", "black"],
             r3: ["write here", "white", "black"],
             r4: ["write here", "white", "black"],
             r5: ["write here", "white", "black"],
             r6: ["write here", "white", "black"]
            }
            
            var column5 = {
             r1: ["write here", "white", "black"],
             r2: ["write here", "white", "black"],
             r3: ["write here", "white", "black"],
             r4: ["write here", "white", "black"],
             r5: ["write here", "white", "black"],
             r6: ["write here", "white", "black"]
            }
            
            setDoc(colAccount, {globalData: ["white", "white", "black", "0px"], Column1: column1, Column2: column2, Column3: column3, Column4: column4, Column5: column5 })
        
              
        // db.collection("accounts").doc(cred.user.uid).set({
        //       email: newUser.value,
        //       password: newPass.value
        //     });
            
        
        signupForm.reset();
        
        
        
        
        
        
      })
      .catch(err => {
        console.log(err.message)
      })


  })




  
})


//   onAuthStateChanged(auth, (user) => {
//   console.log('user status changed:', user)
//   console.log(user.uid)

// })



