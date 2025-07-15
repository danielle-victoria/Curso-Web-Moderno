{/* Aula 36 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Configurando Firebase no Projeto */}



import firebase from "firebase";
import "firebase/firestore"; // Import the Firestore service

if(!firebase.apps.length){
    firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_Key,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    senderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,

})};


export default firebase;



































/*import firebase from "firebase"
import 'firebase/firestore'

/*if(!firebase.apps.length) {
    firebase.initializeApp({
        *apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectid: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,

        apiKey: "AIzaSyAI8i0CT65qLPx-u_UD7AffmPL2UmR-PaY",
        authDomain: "next-crud-a51c6.firebaseapp.com",
        projectid: "next-crud-a51c6",
        storageBucket: 

    })
}


export default firebase*/




/*const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
 };


export default function initFirebase() {
    if(!firebase.apps.length) {
        firebase.initializeApp(clientCredentials);
       
    }
    
}*/



/*import firebase from "firebase/app"

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
};

export default function initFirebase() {
    if(!firebase.apps.length) {
        firebase.initializeApp(clientCredentials)
    }
    console.log("Firebase foi iniciado com sucesso!")
}*/



/*import firebase from "firebase";
import 'firebase/firestore'

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_Key,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    senderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    
};

export default function initFirebase() {
    if(!firebase.apps.length) {
        firebase.initializeApp(clientCredentials);
        // funcao que inicializa o firebase
    }
    console.log("Firebase foi iniciado com sucesso!");
}*/



//import firebase from "firebase/app";




/*export default function initFirebase() {
    if(!firebase.apps.length) {
        firebase.initializeApp(clientCredentials);
        
       
    }
}*/

/*const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_Key,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    senderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};*/


//const app = firebase.initializeApp(firebaseConfig);
//const db = app.firestore(); // Access firestore() on the app instance

//export const db = app.firestore();




