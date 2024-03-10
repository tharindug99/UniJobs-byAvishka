// import * as firebase from 'firebase';
// import '@firebase/auth';
// import '@firebase/firestore';
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: "AIzaSyBCAhgQ6tTn3hSNkgnKCz2Ff_Mqq_hRSu4",
//     authDomain: "unijobs-a4511.firebaseapp.com",
//     projectId: "unijobs-a4511",
//     storageBucket: "unijobs-a4511.appspot.com",
//     messagingSenderId: "483753893460",
//     appId: "1:483753893460:web:2658dd6bd67ee89a0ad7c1"
//   };

//   const app = initializeApp(firebaseConfig);


// export { firebase };

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyBCAhgQ6tTn3hSNkgnKCz2Ff_Mqq_hRSu4",
//   authDomain: "unijobs-a4511.firebaseapp.com",
//   projectId: "unijobs-a4511",
//   storageBucket: "unijobs-a4511.appspot.com",
//   messagingSenderId: "483753893460",
//   appId: "1:483753893460:web:2658dd6bd67ee89a0ad7c1"
// };

// const app = firebase.initializeApp(firebaseConfig);

// export { firebase };


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBCAhgQ6tTn3hSNkgnKCz2Ff_Mqq_hRSu4",
  authDomain: "unijobs-a4511.firebaseapp.com",
  projectId: "unijobs-a4511",
  storageBucket: "unijobs-a4511.appspot.com",
  messagingSenderId: "483753893460",
  appId: "1:483753893460:web:2658dd6bd67ee89a0ad7c1",
  measurementId: "G-D0R2XR7N3Z"
};

let app;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore,firebase };
