// javascript.js

document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Validação básica dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos do formulário.");
      return;
    }

    // Se todos os campos estão preenchidos, exibe uma mensagem de sucesso
    alert("O formulário foi enviado com sucesso! Obrigado por entrar em contato.");

    // Atualiza a página automaticamente após o envio bem-sucedido
    window.location.reload();
  });
});
