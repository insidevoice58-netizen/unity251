import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
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

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("userEmail").textContent =
      "Email: " + user.email;
  } else {
    window.location.href = "login.html";
  }
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth).then(() => {
    alert("Logout ተሳክቷል።");
    window.location.href = "login.html";
  });
});
