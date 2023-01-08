// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyByzifz082KdBM__punM9NFOSYhaG6sfsM',
    authDomain: 'mebe-react.firebaseapp.com',
    projectId: 'mebe-react',
    storageBucket: 'mebe-react.appspot.com',
    messagingSenderId: '415626426913',
    appId: '1:415626426913:web:a96fa7466610ed63d64160'
};

// Initialize Firebase
const init = initializeApp(firebaseConfig);
export const firebaseAuth = init.auth();
