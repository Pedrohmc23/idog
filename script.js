function gerarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const nome = document.getElementById('nome').value;
  const raca = document.getElementById('raca').value;
  const nascimento = document.getElementById('nascimento').value;
  const peso = document.getElementById('peso').value;
  const dono = document.getElementById('dono').value;
  const vacinas = document.getElementById('vacinas').value;
  const proximaVacina = document.getElementById('proximaVacina').value;
  const remedios = document.getElementById('remedios').value;
  const proximoRemedio = document.getElementById('proximoRemedio').value;

  doc.text(`IDOG - Registro`, 10, 10);
  doc.text(`Nome: ${nome}`, 10, 20);
  doc.text(`Raça: ${raca}`, 10, 30);
  doc.text(`Nascimento: ${nascimento}`, 10, 40);
  doc.text(`Peso: ${peso} kg`, 10, 50);
  doc.text(`Dono: ${dono}`, 10, 60);
  doc.text(`Vacinas: ${vacinas}`, 10, 70);
  doc.text(`Próxima Vacina: ${proximaVacina}`, 10, 80);
  doc.text(`Remédios: ${remedios}`, 10, 90);
  doc.text(`Próximo Remédio: ${proximoRemedio}`, 10, 100);
  doc.save("idog_registro.pdf");
}

function gerarRecomendacoes() {
  const peso = parseFloat(document.getElementById('peso').value);
  const nascimento = new Date(document.getElementById('nascimento').value);
  const hoje = new Date();
  const idadeMeses = Math.floor((hoje - nascimento) / (1000 * 60 * 60 * 24 * 30));
  let recomendacao = `Idade: ${idadeMeses} meses.\n`;

  if (peso < 5) recomendacao += "Peso abaixo do ideal para a idade. Consulte um veterinário.\n";
  else if (peso > 10) recomendacao += "Peso elevado. Atenção à alimentação e exercícios.\n";
  else recomendacao += "Peso dentro do esperado. Continue monitorando.\n";

  const proximaVacina = document.getElementById('proximaVacina').value;
  const proximoRemedio = document.getElementById('proximoRemedio').value;
  if (proximaVacina) recomendacao += `Próxima vacina: ${proximaVacina}.\n`;
  if (proximoRemedio) recomendacao += `Próximo remédio: ${proximoRemedio}.\n`;

  document.getElementById('output').innerText = recomendacao;
}