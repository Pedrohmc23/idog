
function generatePDF() {
  const data = new FormData(document.getElementById('dogForm'));
  const content = `
    Nome: ${data.get("name")}
    Raça: ${data.get("breed")}
    Dono: ${data.get("owner")}
    Nascimento: ${data.get("birth")}
    Peso: ${data.get("weight")} kg

    Vacinas:
    ${data.get("vaccines")}

    Remédios:
    ${data.get("medications")}
  `;
  const blob = new Blob([content], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "idog_registro.pdf";
  link.click();
}

function getRecommendation() {
  const data = new FormData(document.getElementById('dogForm'));
  const peso = parseFloat(data.get("weight"));
  const idadeMeses = Math.floor((new Date() - new Date(data.get("birth"))) / (1000 * 60 * 60 * 24 * 30));
  let msg = `Seu cachorro tem ${idadeMeses} meses e pesa ${peso}kg.\n`;

  if (idadeMeses < 4) {
    msg += "👉 Está na fase de vacinação inicial (V8, V10, raiva, etc).\n";
  }
  if (peso > 10) {
    msg += "⚠️ Pode estar acima do peso para essa idade. Consulte um veterinário.\n";
  } else if (peso < 5) {
    msg += "⚠️ Pode estar abaixo do peso. Verifique alimentação.\n";
  } else {
    msg += "✅ Peso adequado para um filhote de médio porte.\n";
  }

  document.getElementById("output").innerText = msg;
}
