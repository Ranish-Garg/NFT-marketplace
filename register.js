 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

 
 const firebaseConfig = {
   apiKey: "AIzaSyDqy8SuzquFI-nAQVKQZD6q4EHhkLfvl70",
   authDomain: "nft-marketplace-563f3.firebaseapp.com",
   projectId: "nft-marketplace-563f3",
   storageBucket: "nft-marketplace-563f3.firebasestorage.app",
   messagingSenderId: "963897332803",
   appId: "1:963897332803:web:9482743d53832d09e730f6"
 };


 const app = initializeApp(firebaseConfig);
 const auth = getAuth();


 

 const submit=document.getElementById("submit");
 submit.addEventListener("click",(event)=>{
    event.preventDefault();

    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    window.location.href="Signin.html"
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    
  });
    
 })