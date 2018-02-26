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
4 | Instale o Node.js, através do comando `sudo apt-get install nodejs` e após instale o *npm*, uilizado para gerenciar pacotes do node, através do comando `sudo apt-get install npm`;
5 | Estilizando o terminal para auxiliar no uso do git, instale o `zsh` através do comando `sudo apt-get install zsh`, instale o Curl para baixar o estivo usando `sudo apt-get install curl` e então execute o comando `sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`, para baixar a costomização do *Oh My ZShell*.
6 | Instalar o MongoDB seguindo as instruções para instalação em terminal;
7 | Criar pasta _`"~\Project"`_;
8 | Faça o *fork* do projeto, copiando o projeto para um diretório de uso exclusivo seu;
9 | Baixe o seu *fork* rodando o comando: _`git clone [URL.thisProject]`_, trocando _`[URL.thisProject]`_ pela URL do fork do projeto, na pasta  _`"~\Project"`_;
10 | Após feito o clone do seu fork, entre na pasta do projeto através do terminal e atualize as dependências utilizando o comando _`npm i`_;

Neste momento o seu ambiente já estará preparado para rodar a aplicação.

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