const eyeSenhaLogin = document.getElementById("eyeSenhaLogin");
const eyeSenhaCadastro = document.getElementById("eyeSenhaCadastro");
const senhaLogin = document.getElementById("senhaLogin");
const senhaCadastro = document.getElementById("senhaCadastro");

eyeSenhaLogin.addEventListener("click", function() {
    if (senhaLogin.type === "password") {
        senhaLogin.type = "text";
        eyeSenhaLogin.setAttribute("name", "eye-off-outline");
    } else {
        senhaLogin.type = "password";
        eyeSenhaLogin.setAttribute("name", "eye-outline");
    }
});

eyeSenhaCadastro.addEventListener("click", function() {
    if (senhaCadastro.type === "password") {
        senhaCadastro.type = "text";
        eyeSenhaCadastro.setAttribute("name", "eye-off-outline");
    } else {
        senhaCadastro.type = "password";
        eyeSenhaCadastro.setAttribute("name", "eye-outline");
    }
});