
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
        
        // console.log(newStuff)
        // // newStuff.push(newlyAdded, newColor, newTextColor)
        // console.log(newStuff)



    //     parent = image.parentElement
    //   console.log(parent)

 



       parent = column.parentElement
       console.log(parent)

       linebreak = document.createElement("br");
       newImage = document.createElement("img");



       newImage.src = "https://cdn-icons-png.flaticon.com/512/84/84380.png"
       newImage.classList.add("newIcon")
       newImage.style.marginTop = "50px";

        parent.innerText = newlyAdded
        parent.style.backgroundColor = newColor
        parent.style.color = newTextColor
        // parent.style.borderRadius = newBorders

       parent.appendChild(linebreak)
       parent.appendChild(newImage)

        
     


     


  }













  
    var globalBackground 
    var globalColumns
    var globalText
    var globalBorders



     globalBackground = collectionInfo[0]
     globalColumns = collectionInfo[1]
     globalText = collectionInfo[2]
     globalBorders = collectionInfo[3]


    global()
 



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
     
   
   global()
 


})


function global() {

    document.body.style.backgroundColor = collectionInfo[0]
    document.body.style.color = collectionInfo[2]
    var allColumns = document.querySelectorAll(".testing")
    allColumns.forEach(function(column){
      
      column.style.backgroundColor = collectionInfo[1]
      column.style.borderRadius = collectionInfo[3]
      



    })

}






    //Column 1
    
    
    // reAdd()
    
    c1r1.addEventListener("click", function(){
       
  
      local(c1r1)  
      
      
      
      // console.log(column1)
      
      column1Load.r1[0] = newlyAdded
      column1Load.r1[1] = newColor
      column1Load.r1[2] = newTextColor
      
      console.log(column1Load)
        
        
    })
    
    c1r2.addEventListener("click", function(){
      
     
      local(c1r2)
      column1Load.r2[0] = newlyAdded
      column1Load.r2[1] = newColor
      column1Load.r2[2] = newTextColor
      
      console.log(column1Load)
        
    })
    
    
    c1r3.addEventListener("click", function(){
        
     
      local(c1r3)
      column1Load.r3[0] = newlyAdded
      column1Load.r3[1] = newColor
      column1Load.r3[2] = newTextColor
      
      console.log(column1Load)  
   
        
    })
    
    c1r4.addEventListener("click", function(){
      
      
       
      local(c1r4)
      column1Load.r4[0] = newlyAdded
      column1Load.r4[1] = newColor
      column1Load.r4[2] = newTextColor
      
      console.log(column1Load)
        
        
    })
    
    c1r5.addEventListener("click", function(){
        
   
      local(c1r5)
      column1Load.r5[0] = newlyAdded
      column1Load.r5[1] = newColor
      column1Load.r5[2] = newTextColor
  
        
    })
    
    c1r6.addEventListener("click", function(){
        
      
      local(c1r6)
      column1Load.r6[0] = newlyAdded
      column1Load.r6[1] = newColor
      column1Load.r6[2] = newTextColor
      
        
    })
    
    //Column 2
    
    
    
    c2r1.addEventListener("click", function(){
       
       
      local(c2r1)
      column2Load.r1[0] = newlyAdded
      column2Load.r1[1] = newColor
      column2Load.r1[2] = newTextColor
        
        
    })
    
    c2r2.addEventListener("click", function(){
      
      local(c2r2) 
      column2Load.r2[0] = newlyAdded
      column2Load.r2[1] = newColor
      column2Load.r2[2] = newTextColor
        
        
    })
    
    
    c2r3.addEventListener("click", function(){
        
      local(c2r3) 
      column2Load.r3[0] = newlyAdded
      column2Load.r3[1] = newColor
      column2Load.r3[2] = newTextColor
        
    })
    
    c2r4.addEventListener("click", function(){
      
      local(c2r4) 
      column2Load.r4[0] = newlyAdded
      column2Load.r4[1] = newColor
      column2Load.r4[2] = newTextColor
        
        
    })
    
    c2r5.addEventListener("click", function(){
        
      local(c2r5) 
      column2Load.r5[0] = newlyAdded
      column2Load.r5[1] = newColor
      column2Load.r5[2] = newTextColor
        
    })
    
    c2r6.addEventListener("click", function(){
      
      local(c2r6)   
      column2Load.r6[0] = newlyAdded
      column2Load.r6[1] = newColor
      column2Load.r6[2] = newTextColor 
        
    })
    
    
    //Column 3
    
    c3r1.addEventListener("click", function(){
       
       local(c3r1) 
      column3Load.r1[0] = newlyAdded
      column3Load.r1[1] = newColor
      column3Load.r1[2] = newTextColor 
        
        
    })
    
    c3r2.addEventListener("click", function(){
      
      local(c3r2) 
      column3Load.r2[0] = newlyAdded
      column3Load.r2[1] = newColor
      column3Load.r2[2] = newTextColor 
        
        
    })
    
    
    c3r3.addEventListener("click", function(){
        
      column3Load.r3[0] = newlyAdded
      column3Load.r3[1] = newColor
      column3Load.r3[2] = newTextColor 
        
    })
    
    c3r4.addEventListener("click", function(){
      
      local(c3r4)  
      column3Load.r4[0] = newlyAdded
      column3Load.r4[1] = newColor
      column3Load.r4[2] = newTextColor 
        
        
    })
    
    c3r5.addEventListener("click", function(){
        
      local(c3r5)
      column3Load.r5[0] = newlyAdded
      column3Load.r5[1] = newColor
      column3Load.r5[2] = newTextColor 
        
    })
    
    c3r6.addEventListener("click", function(){
        
      local(c3r6)
      column3Load.r6[0] = newlyAdded
      column3Load.r6[1] = newColor
      column3Load.r6[2] = newTextColor 
        
    })
    
    //Column4
    
    c4r1.addEventListener("click", function(){
       
       
      local(c4r1) 
      column4Load.r1[0] = newlyAdded
      column4Load.r1[1] = newColor
      column4Load.r1[2] = newTextColor 
        
        
    })
    
    c4r2.addEventListener("click", function(){
      
      local(c4r2)  
      column4Load.r2[0] = newlyAdded
      column4Load.r2[1] = newColor
      column4Load.r2[2] = newTextColor 
        
        
    })
    
    
    c4r3.addEventListener("click", function(){
        
      local(c4r3) 
      column4Load.r3[0] = newlyAdded
      column4Load.r3[1] = newColor
      column4Load.r3[2] = newTextColor 
        
    })
    
    c4r4.addEventListener("click", function(){
      
      local(c4r4) 
      column4Load.r4[0] = newlyAdded
      column4Load.r4[1] = newColor
      column4Load.r4[2] = newTextColor 
        
        
    })
    
    c4r5.addEventListener("click", function(){
        
      local(c4r5) 
      column4Load.r5[0] = newlyAdded
      column4Load.r5[1] = newColor
      column4Load.r5[2] = newTextColor 
        
    })
    
    c4r6.addEventListener("click", function(){
        
      local(c4r6) 
      column4Load.r6[0] = newlyAdded
      column4Load.r6[1] = newColor
      column4Load.r6[2] = newTextColor 
        
    })
    
    //Column 5
    
    c5r1.addEventListener("click", function(){
       
       
      local(c5r1) 
      column5Load.r1[0] = newlyAdded
      column5Load.r1[1] = newColor
      column5Load.r1[2] = newTextColor 
        
        
    })
    
    c5r2.addEventListener("click", function(){
      
      local(c5r2) 
      column5Load.r2[0] = newlyAdded
      column5Load.r2[1] = newColor
      column5Load.r2[2] = newTextColor 
        
        
    })
    
    
    c5r3.addEventListener("click", function(){
        
      local(c5r3) 
      column5Load.r3[0] = newlyAdded
      column5Load.r3[1] = newColor
      column5Load.r3[2] = newTextColor 
        
    })
    
    c5r4.addEventListener("click", function(){
      
      local(c5r4) 
      column5Load.r4[0] = newlyAdded
      column5Load.r4[1] = newColor
      column5Load.r4[2] = newTextColor 
        
        
    })
    
    c5r5.addEventListener("click", function(){
        
      local(c5r5)  
      column5Load.r5[0] = newlyAdded
      column5Load.r5[1] = newColor
      column5Load.r5[2] = newTextColor 
        
    })
    
    c5r6.addEventListener("click", function(){
        
      local(c5r6) 
      column5Load.r6[0] = newlyAdded
      column5Load.r6[1] = newColor
      column5Load.r6[2] = newTextColor 
        
    })
    
    



    document.querySelector(".addSchedule").addEventListener('submit', (e) => {
                  e.preventDefault()


        // const inputs = document.querySelectorAll('.testing')
        // const inputsArr = Array.from(inputs);




        
        setDoc(docRef, {Column1: column1Load, Column2: column2Load, Column3: column3Load, Column4: column4Load, Column5: column5Load, globalData: collectionInfo })



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





