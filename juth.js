import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCf8c77Lx1BiUX-ya-fbLYDlqYFEKaue4Q",
  authDomain: "unity251-a7b75.firebaseapp.com",
  projectId: "unity251-a7b75",
  storageBucket: "unity251-a7b75.firebasestorage.app",
  messagingSenderId: "154132715906",
  appId: "1:154132715906:web:884c5ea5e8f7d2ac31579b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up
const signupBtn = document.getElementById("signupBtn");
if (signupBtn) {
  signupBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("በተሳካ ሁኔታ ተመዝግበዋል!");
        window.location.href = "login.html";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}

// Login
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("እንኳን ደህና መጡ!");
        window.location.href = "index.html";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}
