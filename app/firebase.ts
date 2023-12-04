// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBdtAfSFE877nl5533pwZ3YG7KKJd85U8k',
  authDomain: 'nextjs-news-app.firebaseapp.com',
  projectId: 'nextjs-news-app',
  storageBucket: 'nextjs-news-app.appspot.com',
  messagingSenderId: '716542056951',
  appId: '1:716542056951:web:2e76af7b7b78ff68ae36f2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
