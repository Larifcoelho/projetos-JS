rodada = 1
while (rodada <=3) {
  console.log ("Rodada" + rodada)
  rodada = rodada + 1 
}
  
escolhaJogador = prompt ("Nível " + rodada + " Escolha um vidro (1, 2 ou 3)?: " )
pisoQuebrado = Math.floor(Math.random()*3 + 1);
  
  if (escolhaJogador == pisoQuebrado){
    alert("Vidro quebrou! Você morreu...")
  
  
rodada = 1000;
  }
else {
  alert ("Passou! Piso quebrado estava na ponte: " + pisoQuebrado)
  alert("Você venceu!")
}
rodada = rodada + 1