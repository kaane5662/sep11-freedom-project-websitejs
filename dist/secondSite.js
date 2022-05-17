




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
       

      // console.log(column1Load.c1r1[0])



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
  
  
  
    function local(column) {
  
          newlyAdded = prompt("What would you like to add.")
          newColor = prompt("What background color would you like to add")
          newTextColor = prompt("What text color would you like to add")
  
  
  
  
  
  
  
    }














    var globalBackground
    var globalColumns
    var globalText
    var globalBorders



    // globalBackground = collectionInfo[0]
    // globalColumns = collectionInfo[1]
    // globalText = collectionInfo[2]
    // globalBorders = collectionInfo[3]


   




      document.querySelector("#global").addEventListener("click", function(){
    
    
    
    
    
       //original
    
    
       //firebase test
      //basically if a user schedule exists grab the global values from the collectionInfo array
    
    
         globalBackground = prompt("What would you like the background color to be")
         collectionInfo[0] = globalBackground
         globalColumns = prompt("What would you like your column colors to be")
         collectionInfo[1] = globalColumns
         globalText = prompt("What would you like your text color to be")
         collectionInfo[2] = globalText
         globalBorders = prompt("What would you like your borders to be")
         collectionInfo[3] = globalBorders
    
    
      
    
    
    
    })




var images = document.querySelectorAll("img")






    images.forEach(function(image){

          image.addEventListener("click", function(){


           local()

            // var testing = prompt("What you do?")

            var parent = image.parentElement
            console.log(parent.children[1])

            var determiner = parent.children[1].name
            determiner = determiner.split(",")
            console.log(determiner) //split thing
          
            console.log(determiner[0])

            var columnLocation;
            var rowLocation;
            
            columnLocation = determiner[0] + "Load"
            console.log(columnLocation)
            columnLocation = eval(columnLocation)



           
            
            console.log(columnLocation)


          



            // parent.children[0].style.color = "red"

            // parent.children[0].style.backgroundColor = "blue"
            // parent.style.borderRadius = "25px"
            // parent.style.backgroundColor = "blue"
            // parent.children[1].className = "hello there"
            // parent.children[0].innerHTML = testing


            var gotLocation
            
            rowLocation = determiner[1] 
            console.log(rowLocation)
           

          if(determiner[1] == "row1"){
            gotLocation = columnLocation.r1
          }
          if(determiner[1] == "row2"){
            gotLocation = columnLocation.r2
          }
          if(determiner[1] == "row3"){
            gotLocation = columnLocation.r3
          }
          if(determiner[1] == "row4"){
            gotLocation = columnLocation.r4
          }
          if(determiner[1] == "row5"){
            gotLocation = columnLocation.r5
          }
          if(determiner[1] == "row6"){
            gotLocation = columnLocation.r6
          }
          
            // gotLocation = columnLocation.rowLocation
           console.log(gotLocation)

         gotLocation[0] = newlyAdded
         gotLocation[1] = newColor
         gotLocation[2] = newTextColor

         console.log(column3Load.r5)


          })


})







    document.querySelector(".addSchedule").addEventListener('submit', (e) => {
                  e.preventDefault()


    

        setDoc(docRef, {Column1: column1Load, Column2: column2Load, Column3: column3Load, Column4: column4Load, Column5: column5Load, globalData: collectionInfo })



        // const colAccount = doc(db, 'accounts', user.uid)




        .then(() => {

          console.log('user added data')
          document.location.reload() 
          
          

        })
        .catch(err => {
          console.log(err.message)
        })
        
        

        })





    })




})





