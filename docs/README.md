# Documentação com Jekyll

O Jekyll é uma ferramenta utilizada para criar páginas estáticas. Para entende-la melhor foram criadas instruções específicas de instalação do Jekyll e seus requisitos, assim como a descrição de um primeiro contato com a ferramenta.

## Instalando o Jekyll
Os passos de instalação foram executados em ambiente Linux, em específico, no Ubuntu 16.04.

### Pré-requisitos
Dentre os pré-requisitos do Jekyll, temos:
- Ruby;
- Ruby-dev;
- Make;
- GCC;
- NodeJS (Opcional).

Dentre estes pré-requisitos, faz-se necessário a instalação apenas do Ruby e do Ruby-dev, visto que no ambiente linux já temos o GCC e o Make. Para instalar o Ruby executar um simples comando: 
```sudo apt-get install ruby-full build-essential```

### Jekyll
Após instalado os pré-requisitos, podemos utilizar o `gem` para instalar o Jekyll e o Bundler, com o comando:
```sudo gem install jekyll bundler```

Feito isto, podemos nos certificar que a instalação foi concluida, digitando `jekyll -v` no console, esperando ver a versão do Jekyll que foi instalada.

##
