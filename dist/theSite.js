
console.log("hello from theSite.js")


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
      console.log(doc.data().globalData, doc.id)
       
       //the globalData array
       var collectionInfo = doc.data().globalData
       
         for(var i = 0; i < collectionInfo.length; i++){
           
           console.log(collectionInfo[i])
           
           
           
           
           
          }
       
       
       
       
       
   

      

    
    
    
 
  //global variables

var newlyAdded
var newColor
var newTextColor
var newBorders
var parent
var newImage
var linebreak

var newStuff = []
var newGlobalStuff = []




//boolean for images to proceed

var makeNewImage = 0


// var addBookForm = document.querySelector('#saveInfo')

// var bunchOfNames
// var userPass








var images = document.querySelectorAll(".idk")
// var newImaging = document.querySelector(".newImaging")







function run() {

        newlyAdded = prompt("What would you like to add.")
        newColor = prompt("What background color would you like to add")
        newTextColor = prompt("What text color would you like to add")
        newBorders = prompt("What are your new borders")



  }






images.forEach(function(image){



  function run() {

        newlyAdded = prompt("What would you like to add.")
        newColor = prompt("What background color would you like to add")
        newTextColor = prompt("What text color would you like to add")
        newBorders = prompt("What are your new borders")
        console.log(newStuff)
        newStuff.push(newlyAdded, newColor, newTextColor, newBorders)
        console.log(newStuff)



        parent = image.parentElement
       console.log(parent)

       linebreak = document.createElement("br");
       newImage = document.createElement("img");



       newImage.src = "https://cdn-icons-png.flaticon.com/512/84/84380.png"
       newImage.classList.add("newlyImage")
       newImage.style.marginTop = "50px";

        parent.innerText = newlyAdded
        parent.style.backgroundColor = newColor
        parent.style.color = newTextColor
        parent.style.borderRadius = newBorders

      parent.appendChild(linebreak)
      parent.appendChild(newImage)

      // newIcons = document.querySelectorAll('.newlyImage')
      // makeNewImage = 1
      // console.log(makeNewImage)
      // console.log(newIcons)



  }



  image.addEventListener("click",function(){


      run()





  })






})


  // if(makeNewImage == "1"){






  //   console.log("makeNewImage now pls")


  //   newIcons.forEach(function(newIcon){



  //       function run() {

  //       newlyAdded = prompt("What would you like to add.")
  //       newColor = prompt("What background color would you like to add")
  //       newTextColor = prompt("What text color would you like to add")
  //       newBorders = prompt("What are your new borders")


  //       parent = newIcon.parentElement
  //     console.log(parent)

  //     linebreak = document.createElement("br");
  //     newImage = document.createElement("img");



  //     newImage.src = "https://cdn-icons-png.flaticon.com/512/84/84380.png"
  //     newImage.classList.add("newlyImage")
  //     newImage.style.marginTop = "50px";

  //       parent.innerText = newlyAdded
  //       parent.style.backgroundColor = newColor
  //       parent.style.color = newTextColor
  //       parent.style.borderRadius = newBorders

  //     parent.appendChild(linebreak)
  //     parent.appendChild(newImage)

  //     newIcons = document.querySelectorAll('.newlyImage')
  //     makeNewImage = 1
  //     console.log(newIcons)



  // }

  //     newIcon.addEventListener("click", function(){


  //     run()



  //     })







  //   })















  document.querySelector("#global").addEventListener("click", function(){
    
    
    var determineSchedule = (prompt("Do you already have a schedule? YES or NO")).toLowerCase()
   console.log(determineSchedule)
   
   
   //original
  var globalBackground 
  var globalColumns
  var globalText
  var globalBorders
   
   //firebase test
  //basically if a user schedule exists grab the global values from the collectionInfo array 
   
  if(determineSchedule == "yes"){
     globalBackground = collectionInfo[0]
     globalColumns = collectionInfo[1]
     globalText = collectionInfo[2]
     globalBorders = collectionInfo[3]
  }else {
     globalBackground = prompt("What would you like the background color to be")
     globalColumns = prompt("What would you like your column colors to be")
     globalText = prompt("What would you like your text color to be")
     globalBorders = prompt("What would you like your borders to be")
   
  }
   
   newGlobalStuff.push(globalBackground, globalColumns, globalText, globalBorders)


    document.body.style.backgroundColor = globalBackground
    document.body.style.color = globalText
    var allColumns = document.querySelectorAll(".testing")
    allColumns.forEach(function(column){

      column.style.borderRadius = globalBorders
      column.style.backgroundColor = globalColumns



    })


})







    // var inputs = document.querySelectorAll('.testing')
    // var inputsArr = Array.prototype.slice.call(inputs);




    // document.querySelector(".lookInputs").addEventListener('click', function(){


    //   // var ins = document.querySelectorAll('.testing')

    //   // console.log(ins)

    // //   var ins = document.querySelectorAll('.testing')
    // // var insArr = Array.from(ins);
    // // console.log(insArr)

    // })






    document.querySelector(".addSchedule").addEventListener('submit', (e) => {
                  e.preventDefault()


        // const inputs = document.querySelectorAll('.testing')
        // const inputsArr = Array.from(inputs);




        
        setDoc(docRef, {userData: newStuff, globalData: newGlobalStuff })



        // const colAccount = doc(db, 'accounts', user.uid)




        .then(() => {

          console.log('user added data')
          
        })
        .catch(err => {
          console.log(err.message)
        })

        })





    })

})



