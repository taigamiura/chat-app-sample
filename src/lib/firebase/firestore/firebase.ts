import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDJ9ZThTphtRJ5XrYf-QyavBSUpF49PIN0",
    authDomain: "chatappprojecttm.firebaseapp.com",
    projectId: "chatappprojecttm",
    storageBucket: "chatappprojecttm.appspot.com",
    messagingSenderId: "233259981488",
    appId: "1:233259981488:web:c9ebbb0592c81f77c33975"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

