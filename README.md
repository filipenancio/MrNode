# MrNode

## Preparação Ambiente

#### É necessário baixar:
- [MongoDB](https://www.mongodb.com/) (Banco de dados)
- [Node.JS](https://nodejs.org/en/) (Linguagem)
- [Cmder](http://cmder.net/) (Terminal windows com git)
- [Visual Studio Code](https://code.visualstudio.com) (IDE)

#### Passo-a-Passo!
1. Instalar todos os componentes;
2. Adicionar em variáveis de ambiente, '*Path*', o caminho do *MongoDB*;
3. Criar pasta _`"C:/data/db"`_;
4. Criar pasta _`"C:/Project"`_;
5. Faça o *fork* do projeto;
6. Executar o *Cmder* e através dele vá até a pasta _`"Project"`_, por fim rode o comando: _`git clone [URL.thisProject]`_, trocando _`[URL.thisProject]`_ pela URL do fork do projeto;
7. Após feito o clone do seu fork, entre na pasta backend através do *Cmder* e atualize as dependências através do comando _`npm i`_;
8. Faça o passo 6 novamente, porém na pasta frontend.

## Rodando a aplicação

Para rodar a aplicação você precisa:
- Iniciar o banco de dados através do comando >> `mongod`
- Após, rodar a aplicação através do comando >> `npm run`

O comando _`npm run`_ pode vir acompanhado da opção _`dev`_ ou _`production`_, utilizadas para definir o script de configuração.

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