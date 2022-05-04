
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
       
       
       
       //get the Column1 array
       
       var column1Load = doc.data().Column1
       var column2Load = doc.data().Column2
       var column3Load = doc.data().Column3
       var column4Load = doc.data().Column4
       var column5Load = doc.data().Column5
       var column6Load = doc.data().Column6
       
       
       
       console.log(column1Load.r1[0])
       
       
       
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
var convertClassToString

var newStuff = []
var newGlobalStuff = []
// var column1 = {
// r1 : [],
// r2 : [],
// r3 : [],
// r4 : [],
// r5 : [],
// r6 : []
    
    
// }
// var column2 = []
// var column3 = []
// var column4 = []
// var column5 = []






//boolean for images to proceed

// var makeNewImage = 0


// var addBookForm = document.querySelector('#saveInfo')

// var bunchOfNames
// var userPass








// var images = document.querySelectorAll(".idk")
// var newImaging = document.querySelector(".newImaging")







// function run() {

//         newlyAdded = prompt("What would you like to add.")
//         newColor = prompt("What background color would you like to add")
//         newTextColor = prompt("What text color would you like to add")
//         newBorders = prompt("What are your new borders")



//   }


global()

//column1Load

//Load Column 1
load(c1r1, column1Load.r1)
load(c1r2, column1Load.r2)
load(c1r3, column1Load.r3)
load(c1r4, column1Load.r4)
load(c1r5, column1Load.r5)
load(c1r6, column1Load.r6)
//Load Column2
load(c2r1, column2Load.r1)
load(c2r2, column2Load.r2)
load(c2r3, column2Load.r3)
load(c2r4, column2Load.r4)
load(c2r5, column2Load.r5)
load(c2r6, column2Load.r6)
//Load Column3
load(c3r1, column3Load.r1)
load(c3r2, column3Load.r2)
load(c3r3, column3Load.r3)
load(c3r4, column3Load.r4)
load(c3r5, column3Load.r5)
load(c3r6, column3Load.r6)
//Load Column4
load(c4r1, column4Load.r1)
load(c4r2, column4Load.r2)
load(c4r3, column4Load.r3)
load(c4r4, column4Load.r4)
load(c4r5, column4Load.r5)
load(c4r6, column4Load.r6)
//Load Column5
load(c5r1, column5Load.r1)
load(c5r2, column5Load.r2)
load(c5r3, column5Load.r3)
load(c5r4, column5Load.r4)
load(c5r5, column5Load.r5)
load(c5r6, column5Load.r6)







//   function local(column) {

//         newlyAdded = prompt("What would you like to add.")
//         newColor = prompt("What background color would you like to add")
//         newTextColor = prompt("What text color would you like to add")
        
//         console.log(newStuff)
//         // newStuff.push(newlyAdded, newColor, newTextColor)
//         console.log(newStuff)



//     //     parent = image.parentElement
//     //   console.log(parent)

 



//       parent = column.parentElement
//       console.log(parent)

//       linebreak = document.createElement("br");
//       newImage = document.createElement("img");



//       newImage.src = "https://cdn-icons-png.flaticon.com/512/84/84380.png"
//       newImage.setAttribute("id", convertClassToString)
//       newImage.style.marginTop = "50px";

//         parent.innerText = newlyAdded
//         parent.style.backgroundColor = newColor
//         parent.style.color = newTextColor
//         // parent.style.borderRadius = newBorders

//       parent.appendChild(linebreak)
//       parent.appendChild(newImage)

        
     


     


//   }













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

    var globalBackground 
     var globalColumns
    var globalText
     var globalBorders



     globalBackground = collectionInfo[0]
     globalColumns = collectionInfo[1]
     globalText = collectionInfo[2]
     globalBorders = collectionInfo[3]


    
    


// load(c1r1, column1Load.r1)
// load(c1r2, column1Load.r2)
// load(c1r4, column1Load.r4)
  // load(c1r2, column1Load.r2) 



//   document.querySelector("#global").addEventListener("click", function(){
    
    
   
   
   
//   //original
  
   
//   //firebase test
//   //basically if a user schedule exists grab the global values from the collectionInfo array 
   
  
//      globalBackground = prompt("What would you like the background color to be")
//      collectionInfo[0] = globalBackground
//      globalColumns = prompt("What would you like your column colors to be")
//      collectionInfo[1] = globalColumns
//      globalText = prompt("What would you like your text color to be")
//      collectionInfo[2] = globalText
//      globalBorders = prompt("What would you like your borders to be")
//      collectionInfo[3] = globalBorders
     
   
//   global()
//   // newGlobalStuff.push(globalBackground, globalColumns, globalText, globalBorders)
   
   

//     // document.body.style.backgroundColor = globalBackground
//     // document.body.style.color = globalText
//     // var allColumns = document.querySelectorAll(".testing")
//     // allColumns.forEach(function(column){

//     //   column.style.borderRadius = globalBorders
//     //   column.style.backgroundColor = globalColumns



//     // })


// })


function global() {

    document.body.style.backgroundColor = collectionInfo[0]
    document.body.style.color = collectionInfo[2]
    var allColumns = document.querySelectorAll(".testing")
    allColumns.forEach(function(column){
      
      column.style.backgroundColor = collectionInfo[1]
      column.style.borderRadius = collectionInfo[3]
      



    })

}

    // load(c1r1, column1Load.r1)
    // load(c1r2, column1Load.r2)


  function load(columnRow, columnRowLoad) {
   
    

       parent = columnRow.parentElement
      // console.log(columnRowLoad)

       linebreak = document.createElement("br");
       newImage = document.createElement("img");



       newImage.src = "https://cdn-icons-png.flaticon.com/512/84/84380.png"
       newImage.classList.add("newIcon")
       newImage.style.marginTop = "50px";
       
       var testThing = {
         name: columnRow
       }
        

        var stringClass = Object.toString(testThing)
        console.log(stringClass)


        // console.log(column.row)
        parent.innerHTML = columnRowLoad[0]
        parent.style.backgroundColor = columnRowLoad[1]
        parent.style.color = columnRowLoad[2]
        // newImage.setAttribute("id",columnRow)
        // parent.style.borderRadius = newBorders

      parent.appendChild(linebreak)
      parent.appendChild(newImage)

        
      
      
  }
  
   





    // var inputs = document.querySelectorAll('.testing')
    // var inputsArr = Array.prototype.slice.call(inputs);




    // document.querySelector(".lookInputs").addEventListener('click', function(){


    //   // var ins = document.querySelectorAll('.testing')

    //   // console.log(ins)

    // //   var ins = document.querySelectorAll('.testing')
    // // var insArr = Array.from(ins);
    // // console.log(insArr)

    // })
    
    





    
    // reAdd()
    

    



    // document.querySelector(".addSchedule").addEventListener('submit', (e) => {
    //               e.preventDefault()


    //     // const inputs = document.querySelectorAll('.testing')
    //     // const inputsArr = Array.from(inputs);




        
    //     setDoc(docRef, {Column1: column1Load, globalData: collectionInfo })



    //     // const colAccount = doc(db, 'accounts', user.uid)




    //     .then(() => {

    //       console.log('user added data')
          
    //     })
    //     .catch(err => {
    //       console.log(err.message)
    //     })

    //     })





    })
    
    
    

})





