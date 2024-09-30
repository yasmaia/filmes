let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(900, 500);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("green");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(50);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Pousando no amor";
    } else {
      if (idade >= 1) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "É assim que acaba";          
        } else{
         return "Nosso eterno verão";
        }
      } else {
        if (gostaDeFantasia) {
          return "Uma ideia de voce";
        } else {
          return "O fabricante de lagrimas";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A arte de amar";
    } else {
      return "Questão de tempo";
    }
  }
}
