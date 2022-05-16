//funcional
function sejaBemVindo(){
    console.log("Seja Bem Vindo!");
}

console.log("Chamando a função seja bem vindo sejaBemVindo();");
sejaBemVindo();

//"""POO""" 
var objProfessor = {
    nome: "Filipe",
    curso: "Técnico em Desenvolvimento de Software",
    ministrarAula: function(){
        console.log("Ministrando aula de programação em Javascript!");
    }
};

console.log("objeto professor");
console.log(objProfessor);

console.log("acessando propriedades: objProfessor.nome");
console.log(objProfessor.nome);
console.log(objProfessor.curso);

console.log("chamando o método do objeto professor: objProfessor.ministrarAula()");
objProfessor.ministrarAula();
