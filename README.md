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
É um compilador de código javascript que transforma os módulos em conteúdo estático.

Para instalar:
>npm i --save-dev webpack webpack-dev-server

Após instalar é necessário criar o arquivo de configuração do webpack: `webpack.config.json`.

```javascript
const webpack = require('webpack')

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    }

    ...
}
```

>Em package.json, deve-se utilizar da tag script para fazer alterações para habilitar o webpack, incluindo:
>- dev: "webpack-dev-server --progress --colors --inline --hot"

#### Módulos
Javascript é uma linguagem adaptativa com múltiplas versões e atualmente vem se expandindo para outras plataformas, criando uma modularização da linguagem através de dependências de arquivos gerenciadas através das tecnologias CommonsJS e o ES2015, por exemplo, que ambas funcionam com o Webpack.

##### CommonsJS
Com o CommonsJS são criados vários arquivos javascript interligados por dependências. Desta forma através do index.js o webpack recupera todos os módulos e cria o conteúdo estático do site.

##### Transpile >>> Babel ES2015
O Babel é um transcritor de código que trabalha com modularização, traduzindo o código ES2015 para Javascript.

Para utilizar o Babel, é necessário instalar as suas dependências com o comando:
> npm i --save-dev babel-core@6.22.1 babel-loader@6.2.10 babel-preset-es@6.22.0

Depois de instalado, tem que ser configurado no Webpack, adicionando no arquivo `webpack.config.js`:

```javascript
module: {
        loaders:[{
            test: /.js?$/,
            loader:'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }]
    }
```

---
##### ©Copyright - Todos os diretos de cópia são reservados aos autores!  

---
<center>
    Lista de Autores 
    <li>Filipe Guédes Venâncio</li>
</center>

---