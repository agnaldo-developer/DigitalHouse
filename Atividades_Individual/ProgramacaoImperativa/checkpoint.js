console.log("")
console.log("Escolha as opções do menu:")
console.log("1 - Pipoca – 10 segundos (padrão);")
console.log("2 - Macarrão – 8 segundos (padrão);")
console.log("3 - Carne – 15 segundos (padrão);")
console.log("4 - Feijão – 12 segundos (padrão);")
console.log("5 - Brigadeiro – 8 segundos (padrão);")
console.log("")


function microondas(opcao, tempo) {
  console.log('Você escolheu a opção: ' + opcao + ' tempo de: ' + tempo + 'minutos')
  console.log("")
  if (opcao == 1 && tempo == 10) {
    console.log("Prato pronto, bom apetite!");
  }
  if (opcao == 1 && tempo < 10) {
    console.log("Tempo insuficiente")
  }
  if (opcao == 1 && tempo > 10 && tempo < 20) {
    console.log("Comida queimou")
  }
  if (opcao == 1 && tempo >= 30) {
    console.log("Kabumm")
  }
  if (opcao == 2 && tempo == 8) {
    console.log("Prato pronto, bom apetite!");
  }
  if (opcao == 2 && tempo < 8) {
    console.log("Tempo insuficiente")
  }
  if (opcao == 2 && tempo > 8 && tempo < 16) {
    console.log("Comida queimou")
  }
  if (opcao == 2 && tempo >= 28) {
    console.log("Kabumm")
  }
  if (opcao == 3 && tempo == 15) {
    console.log("Prato pronto, bom apetite!");
  }
  if (opcao == 3 && tempo < 15) {
    console.log("Tempo insuficiente")
  }
  if (opcao == 3 && tempo > 15 && tempo < 30) {
    console.log("Comida queimou")
  }
  if (opcao == 3 && tempo >= 45) {
    console.log("Kabumm")
  }
  if (opcao == 4 && tempo == 12) {
    console.log("Prato pronto, bom apetite!");
  }
  if (opcao == 4 && tempo < 12) {
    console.log("Tempo insuficiente")
  }
  if (opcao == 4 && tempo > 12 && tempo < 24) {
    console.log("Comida queimou")
  }
  if (opcao == 4 && tempo >= 36) {
    console.log("Kabumm")
  }
  if (opcao == 5 && tempo == 8) {
    console.log("Prato pronto, bom apetite!");
  }
  if (opcao == 5 && tempo < 8) {
    console.log("Tempo insuficiente")
  }
  if (opcao == 5 && tempo > 9 && tempo < 16) {
    console.log("Comida queimou")
  }
  if (opcao == 5 && tempo >= 32) {
    console.log("Kabumm")
  }
  if (opcao > 5) {
    console.log("Opcao invalida")
  }
  console.log("")

}


microondas(4, 12);

