const senha = document.getElementById("senha");

senha.addEventListener("input", () => {
  senha.type = "text";
  setTimeout(() => {
    senha.type = "password";
  }, 2000);
});
function validarSenhas() {
  const senha = document.querySelector("#senha").value;
  const confirmarSenha = document.querySelector("#confirmarsenha").value;

  if (senha === confirmarSenha) {
    return true;
  } else {
    alert("As senhas não são iguais.");
    setTimeout(() => {
      location.reload();
    }, 1000);
    return false;
  }
}