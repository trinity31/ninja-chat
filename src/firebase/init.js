  import firebase from 'firebase'
  import firestore from 'firebase/firestore'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCDsvFTxdmeob7H9UlHnmbZK1r7yNFrOMU",
    authDomain: "udemy-ninja-chat-c5dd9.firebaseapp.com",
    databaseURL: "https://udemy-ninja-chat-c5dd9.firebaseio.com",
    projectId: "udemy-ninja-chat-c5dd9",
    storageBucket: "udemy-ninja-chat-c5dd9.appspot.com",
    messagingSenderId: "419156138267"
  };
  
  const firebaseApp = firebase.initializeApp(config)
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()