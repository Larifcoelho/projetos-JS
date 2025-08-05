let idade = prompt("Quantos anos você tem?");
idade = parseInt (idade); // Converte idade para número

if (idade < 18) {
  alert("Você NÃO pode jogar Jokenpô :( ");
} else {
  let escolhaJogador = parseInt(prompt("Escolha: 1-Pedra, 2-Papel ou 3-Tesoura?"));
  let escolhaComputador = Math.floor(Math.random() * 3) + 1;

  alert("Computador escolheu: " + escolhaComputador);

  if (escolhaJogador === escolhaComputador) {
    alert("Empate!!");
  } else if (
    (escolhaJogador === 1 && escolhaComputador === 3) || // Pedra ganha de tesoura
    (escolhaJogador === 2 && escolhaComputador === 1) || // Papel ganha de pedra
    (escolhaJogador === 3 && escolhaComputador === 2)    // Tesoura ganha de papel
  ) {
    alert("Você venceu!");
  } else {
    alert("Computador venceu!");
  }
}