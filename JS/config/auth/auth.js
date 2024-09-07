// Importa o Firebase Auth do arquivo de configuração
import { auth } from "../firebase.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const provider = new GoogleAuthProvider();

// Autenticação com Google
document
  .getElementById("withGoogle")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Previne o comportamento padrão do botão

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Usuário autenticado com sucesso:", result.user);
        // Aqui você pode redirecionar o usuário ou realizar outras ações
      })
      .catch((error) => {
        console.error("Erro na autenticação com Google:", error);
      });
  });

// Autenticação com Email e Senha (Cadastro)
document
  .getElementById("cadWithEmail")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("emailCadastro").value;
    const senha = document.getElementById("senhaCadastro").value;

    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Conta criada com sucesso");
        alertContainer.style.display = "flex";
        alertMessage.classList.add("success");
        alertMessage.innerHTML = "Cadastro realizado! Acesse abaixo";
      })
      .catch((error) => {
        console.error("Erro ao criar conta:", error);
      });
  });

// Autenticação com Email e Senha (Login)
document
  .getElementById("logWithEmail")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("emailLogin").value;
    const senha = document.getElementById("senhaLogin").value;

    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Usuário logado com sucesso:", userCredential.user);
        // Ações após login
        window.location.href = "homepage.html";
      })
      .catch((error) => {
        console.error("Erro ao fazer login:", error);
      });
  });

  
