import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyC4uqHhmME1PCUs88GTV1QEnXcinrq51dA",
    authDomain: "fir-project-669dd.firebaseapp.com",
    projectId: "fir-project-669dd",
    storageBucket: "fir-project-669dd.appspot.com",
    messagingSenderId: "667988088762",
    appId: "1:667988088762:web:726de24589631b17e9ef83",
    measurementId: "G-W7S1Y32QDG"
  };

 export default firebase.initializeApp(firebaseConfig)