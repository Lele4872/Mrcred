function enviarEmail() {
  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const valor = document.getElementById("valor").value;
  const tipo = document.getElementById("tipo").value;

  const corpo =
    "Nova solicitação de empréstimo:%0D%0A" +
    "Nome: " + nome + "%0D%0A" +
    "CPF: " + cpf + "%0D%0A" +
    "Valor desejado: R$" + valor + "%0D%0A" +
    "Tipo: " + tipo;

  window.location.href =
    "mailto:leticiasilvasantos696@gmail.com?subject=Solicitação de Empréstimo&body=" + corpo;
}