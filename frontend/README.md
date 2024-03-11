# Frontend

O frontend é responsável por receber os inputs do usuário e enviar para o backend e colocar a resposta de forma amigável.

## Como rodar

Antes de qualquer etapa, é necessário configurar as variáveis de ambiente do projeto, para isso renomeie o arquivo `.env.example` para `.env`.

Ou no terminal shell digite:

```sh
cp .env.example .env
```

## Bun

Caso tenha o Bun.sh instalado, utilize-o para rodar a aplicação, rodando os comandos:

```sh
bun install
bun run build
bun run preview
```

## Node.js

Caso tenha somente o nodejs instalado, utilize o seguinte comando:

```sh
npm install
npm run build
npm run preview
```

# Sucesso

Após executar uma das etapas para inicialização do projeto, você verá uma mensagem:

```sh
$ vite preview
  ➜  Local:   http://localhost:4173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Isso significa que o projeto está rodando, para acessá-lo utilize:

[localhost:4173](http://localhost:4173/) no seu navegdor.