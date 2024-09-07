import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8nfn6f6-t5MCW5O38pHvOLH7CtIPT-LQ",
  authDomain: "academiaproject-41a79.firebaseapp.com",
  projectId: "academiaproject-41a79",
  storageBucket: "academiaproject-41a79.appspot.com",
  messagingSenderId: "2845327896",
  appId: "1:2845327896:web:d5b923c9dfc54eb8eff96d",
  measurementId: "G-1BQSLXTB5J",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Inicializa o Auth

// Exporta a instância de auth para ser usada em outros arquivos
export { auth };