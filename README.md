# MrNode

## Preparação Ambiente

#### Programas necessários:
- [MongoDB](https://www.mongodb.com/) (Banco de dados)
- [Node.JS](https://nodejs.org/en/) (Linguagem)
- [Cmder](http://cmder.net/) (Terminal windows com git), ou [OhMyZShell](https://github.com/robbyrussell/oh-my-zsh) (Personalização de terminal linux para utilizar git)
- [Visual Studio Code](https://code.visualstudio.com) (IDE)
- [Git](https://git-scm.com/) (Controle de versionamento de código)


#### Passo-a-Passo!

Para um melhor entendimento foram feitos dois passo a passo, tratando das particularidades de cada sistema operacional, Windows e Ubuntu.

 . | Windows 
---|--------
 1 | Instalar todos os componentes;
 2 | Adicionar em variáveis de ambiente, *`Path`*, o caminho da pasta bin do MongoDB, algo como: *`".../MongoDB/.../bin"`*;
 3 | Criar pasta _`"C:/data/db"`_;
 4 | Criar pasta _`"C:/Project"`_;
 5 | Faça o *fork* do projeto, copiando o projeto para um diretório de uso exclusivo seu;
 6 | Baixe o seu *fork* rodando o comando: _`git clone [URL.thisProject]`_, trocando _`[URL.thisProject]`_ pela URL do fork do projeto, na pasta  _`"C:/Project"`_;
 7 | Após feito o clone do seu fork, entre na pasta do projeto através do terminal e atualize as dependências utilizando o comando _`npm i`_;

Já no caso do Ubuntu...

.  | Linux (Ubuntu)
---|---------------
1 | Primeiro atualize o repositório utilizando, nesta ordem, os comanandos: `sudo apt-get update` e `sudo apt-get upgrade`;
2 | Com o sistema já atualizado, instale o *Git*, através do comando `sudo apt-get install git`;
3 | Baixe do [site](https://code.visualstudio.com) e instale, a IDE Visual Studio Code;
4 | Estilizando o terminal para auxiliar no uso do git, instale o `zsh` através do comando `sudo apt-get install zsh`, instale o Curl para baixar o estivo usando `sudo apt-get install curl` e então execute o comando `sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`, para baixar a costomização do *Oh My ZShell*;
5 | Para instalar o Node.js é necessário fazer através do NVM, qual controla as versões do Node existentes. Para isso, utilize o comando `sudo apt-get install build-essential libssl-dev` e depois utilize o comando `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash`. Agora com o NVM funcionando, use o comando `nvm ls-remote` para listar as versões disponíveis do Node e depois `nvm install [version]`, onde `[version]` é a versão escolhida, para instalar o Node. Após verifique se o NPM que gerencia os módulos está funcionando através do comando `npm -v`, caso o comando não for reconhecido, instale o *npm* através do comando `sudo apt-get install npm`;
6 | Instalar o MongoDB seguindo as instruções para instalação em terminal;
7 | Criar pasta _`"~\Project"`_;
8 | Faça o *fork* do projeto, copiando o projeto para um diretório de uso exclusivo seu;
9 | Baixe o seu *fork* rodando o comando: _`git clone [URL.thisProject]`_, trocando _`[URL.thisProject]`_ pela URL do fork do projeto, na pasta  _`"~\Project"`_;
10 | Após feito o clone do seu fork, entre na pasta do projeto através do terminal e atualize as dependências utilizando o comando _`npm i`_;

Neste momento o seu ambiente já estará preparado para rodar a aplicação.

## Rodando a aplicação

Para rodar a aplicação você precisa:
- Iniciar o banco de dados através do comando >> `mongod` no Windows ou `sudo service mongod start` no linux
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

##### Babel (ES2015)
O Babel é um transcritor de código que trabalha com modularização, traduzindo o código ES2015 para Javascript.

Para utilizar o Babel, é necessário instalar as suas dependências com o comando:
> npm i --save-dev babel-core@6.22.1 babel-loader@6.2.10 babel-preset-es2015@6.22.0

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
#### React

Para instalar as dependências do react é necessário executar o comando `npm i --save-dev react@15.4.2`, adicionar o preset no webpack e baixa-lo através do comando `npm i --save-dec babel-preset-react@6.22.0`.

##### Spread ( ...)

O Spread é um recurso muito comum ao *React*, para utiliza-lo é necessário adicionar seu plugin ao babel. Para isto basta adicionar no arquivo de configuração do webpack, `plugin: ['transform-object-rest-spread']` e instalar o plugin com o comando `npm i --save-dev babel-transform-object-rest-spread@6.22.0`.

#### CSS (Como utilizar)

Para utilizar o CSS é preciso que seja configurado alguns plugins. Dentro do arquivo _`"webpack.config.js"`_ adicione `const ExtractTextPlugin = require('extract-text-webpack-plugin')` e antes da tag `module:`, adicione:

```javascript
plugins: [
    new ExtractTextPlugin('app.css')
]
```

Após é necessário criar um novo loader:

```javascript
{
    test: /\.css$/,
    loader: ExtractTextPlugin.extract("style-loader","css-loader")
}
```

Para instalar as dependências:

> npm i --save-dev extract-text-webpack-plugin@1.0.1 style-loader@0.13.1 css_loader@0.26.1

Por fim, temos o arquivo _`"index.html"`_ na pasta `public`, que deverá ficar...

``` html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Exercícios de Webpack</title>
        <link rel='stylesheet' href='app.css'>
    </head>
    <body>
        <script src="bundle.js"></script>
    </body>
</html>
```


---
##### ©Copyright - Todos os diretos de cópia são reservados aos autores!  

---
<center>
    Lista de Autores 
    <li>Filipe Guédes Venâncio</li>
</center>

---