import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyDgEfAsoVwEQXTCXHaxl3dJRG1XWFu7FTE",
    authDomain: "complaint-forum-537d9.firebaseapp.com",
    projectId: "complaint-forum-537d9",
    storageBucket: "complaint-forum-537d9.appspot.com",
    messagingSenderId: "346391270577",
    appId: "1:346391270577:web:b06ce42b126d7fe544be90"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

