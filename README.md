# MrNode

## Preparação Ambiente

É necessário baixar:
-MongoDB (Banco de dados)
-Node.JS
-Cmder (Terminal windows com git)
-Visual Studio Code (IDE)

1 - Instalar todos os componentes!
2 - Adicionar em variáveis de ambiente, "Path", o caminho do MongoDB
3 - Criar pasta C:/data/db

## Comandos importantes
mongod -> para iniciar o banco de dados
npm i -> para baixar dependências do projeto
npm run dev -> rodar aplicação em modo desenvolvimento
npm run production -> rodar aplicação em modo produção

## Criando nova aplicação
npm init -y

### Utilizando Webpack
npm i --save-dev webpack webpack-dev-server

em package.json, pode utilizar da tag script para fazer alterações como
dev: "webpack-dev-server --progress --colors --inline --hot"



