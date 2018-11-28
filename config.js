
import Firebase from "firebase"



let config = {
  apiKey: "AIzaSyAeSlk3GsqZYzL4PRRx8a8sfIAsleqH0W0",
  authDomain: "native-a97b6.firebaseapp.com",
  databaseURL: "https://native-a97b6.firebaseio.com",
  projectId: "native-a97b6",
  storageBucket: "native-a97b6.appspot.com",
  messagingSenderId: "722240661353"
};


let app = Firebase.initializeApp(config);
export const db = app.database();