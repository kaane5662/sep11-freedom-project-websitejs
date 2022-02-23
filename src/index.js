import { initializeApp } from 'firebase/app'

import {
  getFirestore, collection, getDocs
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBjhE6EvE4Z_87veOHTiqpTMsDWD3Dbtps",
  authDomain: "freedom-project-858bd.firebaseapp.com",
  projectId: "freedom-project-858bd",
  storageBucket: "freedom-project-858bd.appspot.com",
  messagingSenderId: "286303704031",
  appId: "1:286303704031:web:d49b8f432d3d7123d12a6a",
  measurementId: "G-DNV9WRHR16"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'names')

// get collection data
getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let names = []
    snapshot.docs.forEach(doc => {
      names.push({ ...doc.data(), id: doc.id })
    })
    console.log(names)
  })
  .catch(err => {
    console.log(err.message)
  })




  const colRef2 = collection(db, 'userInfo')

// get collection data
getDocs(colRef2)
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













// import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';
// // Follow this pattern to import other Firebase services
// // import { } from 'firebase/<service>';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyBjhE6EvE4Z_87veOHTiqpTMsDWD3Dbtps",
//   authDomain: "freedom-project-858bd.firebaseapp.com",
//   projectId: "freedom-project-858bd",
//   storageBucket: "freedom-project-858bd.appspot.com",
//   messagingSenderId: "286303704031",
//   appId: "1:286303704031:web:d49b8f432d3d7123d12a6a",
//   measurementId: "G-DNV9WRHR16"
// });


// const db = getFirestore(firebaseApp)
// db.collection("todos").getDocs()
// const todosCol = collection(db, "todos")
// const snapshot = await.getDocs(todosCol)



