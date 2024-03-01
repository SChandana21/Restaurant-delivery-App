import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBFJPx31tHS_hsSU8QdwUSnlwrdcf6JPCU",
  authDomain: "restaurantapp-c4f0e.firebaseapp.com",
  databaseURL: "https://restaurantapp-c4f0e-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-c4f0e",
  storageBucket: "restaurantapp-c4f0e.appspot.com",
  messagingSenderId: "1052253543609",
  appId: "1:1052253543609:web:d244443bfada95a6794f68"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage};
