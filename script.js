// Fazer a exibição de uma lista de carros de forma eficiente usando HTML!!

const carros = ["Uno","Gol","Maréa","HB20"]; //Lista de carros

const conteudo = document.getElementById("conteudo") // Fazendo a chamada do elemento "conteudo" do nossso DOM
let dados = ""; // variáel que vai armazenar nossa lista na memoória do JS.

let i = 0; //Nosso contador que ficará responsavel pelo loop enquanto o tamanho da lista não for atingido

while(i < carros.length){  // Responsavel pela a ação enquanto a condição for possivel dentro do proposto

    dados += "<p>"+ carros[i] + "</p>";

    i++;

}

const secao = document.createElement("div"); // Criando um elemento que será enviado para nosso DOM junto á nossa lista.
secao.innerHTML = ("<h2>Loop da lista </h2>")+dados; //Empacotando tudo que foi colocado dentro da variável dados e á enviado á seção.
conteudo.append(secao); // comando que permite que nossa variável conteudo(div) receba o pacote da nossa lista.