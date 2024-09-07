import { auth } from "../firebase.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const alertContainer = document.getElementById("alertContainer");
const alertMessage = document.getElementById("alertMessage");

onAuthStateChanged(auth, (user) => {
  if (user) {
    alertContainer.style.display = "flex";
    alertMessage.classList.add("success");
    alertMessage.innerHTML = `Bem vindo(a), ${user.email}!`;
    console.log("Usuário autenticado:", user.email);
  } else {
        window.location.href = "index.html";
  }
});

const sair = document.getElementById("logOff");

sair.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
            window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Erro ao deslogar:", error.message);
    });
});

const fechar = document.getElementById("fechar");
fechar.addEventListener("click", () => {
  alertContainer.style.display = "none";
});