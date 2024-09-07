const fechar = document.getElementById("fechar");
fechar.addEventListener("click", () => {
  alertContainer.style.display = "none";
  window.location.reload(true);
});