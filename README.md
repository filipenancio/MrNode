# MrNode

## Preparação Ambiente

#### É necessário baixar:
- [MongoDB](https://www.mongodb.com/) (Banco de dados)
- [Node.JS](https://nodejs.org/en/)
- [Cmder](http://cmder.net/) (Terminal windows com git)
- [Visual Studio Code](https://code.visualstudio.com) (IDE)

#### Passo-a-Passo!
1. Instalar todos os componentes;
2. Adicionar em variáveis de ambiente, '*Path*', o caminho do *MongoDB*;
3. Criar pasta '_C:/data/db_';
4. Criar pasta '_C:/Project_';
5. Faça o *fork* do projeto;
6. Executar o *Cmder* e através dele vá até a pasta '_Project_', por fim rode o comando: '_git clone [URL.thisProject]_', trocando '_[URL.thisProject]_' pela URL do fork do projeto;
7. Após feito o clone do seu fork, entre na pasta backend através do *Cmder* e atualize as dependências através do comando '_npm i_';
8. Faça o passo 6 novamente, porém na pasta frontend.

## Rodando a aplicação

Para rodar a aplicação você precisa:
- Iniciar o banco de dados através do comando >> mongod
- Após, rodar a aplicação através do comando >> npm run

O comando '_npm run_' pode vir acompanhado da opção '_dev_' ou '_production_', utilizadas para definir o script de configuração.

---
## Informações adversas!

Algumas informações das possíveis tecnologias a serem utilizadas no projeto e comandos.

#### Criando nova aplicação
>npm init -y

#### Utilizando Webpack
>npm i --save-dev webpack webpack-dev-server

>Em package.json, pode utilizar da tag script para fazer alterações como:
>- dev: "webpack-dev-server --progress --colors --inline --hot"

---
##### ©Copyright - Todos os diretos de cópia são reservados aos autores!  

---
<center>
    Lista de Autores 
    <li>Filipe Guédes Venâncio</li>
</center>

---