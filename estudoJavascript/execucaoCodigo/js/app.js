//declaração de variáveis
var nome = "Filipe";
var sobreNome = "Venâncio";

console.log("Instrução solta 1");

//declaração de função
function exibirNomeConsole() {
    console.log("função exibir nome console: "+nome);
}

function exibirNomeCompleto() {
    console.log("Nome completo: "+nome+" "+sobreNome);
}

function eventoClick() {
    alert("Você clicou em um botão!");
}

//chamadas de função
exibirNomeConsole();