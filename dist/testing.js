

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { getFirestore, collection, getDocs, addDoc, doc, onSnapshot, setDoc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
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



onAuthStateChanged(auth, (user) => {


  // var discriminant = prompt("Did you already have a schedule made?")



  console.log('user status changed:', user.email)


    //get the user document based on the current user id object
    const docRef = doc(db, 'accounts', user.uid)



    onSnapshot(docRef, (doc) => {

        var column1Load = doc.data().Column1
        console.log(column1Load.r1)
        var stupid = column1Load.r1


        for(var i = 0; i < stupid; i++){


                console.log(stupid[i])



        }



    })


})

var images = document.querySelectorAll("img")






    images.forEach(function(image){

          image.addEventListener("click", function(){

            var testing = prompt("What you do?")

            var parent = image.parentElement
            console.log(parent.children[1])


            parent.children[0].style.color = "red"
            // parent.children[0].style.backgroundColor = "blue"
            parent.style.borderRadius = "25px"
            parent.style.backgroundColor = "blue"
            parent.children[1].className = "hello there"
            parent.children[0].innerHTML = testing



            console.log(parent.children[1].name) //get name element








          })


})