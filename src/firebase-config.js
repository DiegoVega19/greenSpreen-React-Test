import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyC-r6wJeNsJzZEdIFmze7N1D4qwSmcU_TU",
  authDomain: "greenspreen-978f4.firebaseapp.com",
  projectId: "greenspreen-978f4",
  storageBucket: "greenspreen-978f4.appspot.com",
  messagingSenderId: "378563722062",
  appId: "1:378563722062:web:55651e5c85a2363ad2bc1f",
  measurementId: "G-DRBPX3ZXC0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)