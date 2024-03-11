# Backend

O backend é responsável por listar todos os petshops e fazer todos os cálculos necessários para decidir qual o melhor petshop.

# Como rodar

Antes de qualquer etapa, é necessário configurar as variáveis de ambiente do projeto, para isso renomeie o arquivo `.env.example` para `.env`.

Ou no terminal shell digite:

```sh
cp .env.example .env
```

A única variável de ambiente necessária é `DATABASE_URL`, que define a string de conexão com o banco de dados.

A aplicação utiliza um banco de dados postgres, que está configurado no docker.

No entanto, caso opte por utilizar uma instância externa ou uma instalação própria do Docker, basta adaptar a variável para tal, seguindo o formato:

```
postgres[ql]://[username[:password]@][host[:port],]/database[?parameter_list]

\_____________/\____________________/\____________/\_______/\_______________/
     |                   |                  |          |            |
     |- schema           |- userspec        |          |            |- parameter list
                                            |          |
                                            |          |- database name
                                            |
                                            |- hostspec
```

## Docker (recomendado)

Caso tenha docker instalado no seu computador, basta utilizar o comando:

```sh
docker compose up
```

Esse comando irá inicializar todos os serviços necessários para rodar a aplicação backend (banco e servidor).


## Bun

Caso tenha o Bun.sh instalado, utilize-o para rodar a aplicação, rodando o comando:

```sh
bun install
bun run db:migrate
bun run db:seed
bun run start
```

## Node.js

Caso tenha somente o nodejs instalado, utilize o seguinte comando:

```sh
npm install
npm run db:migrate
npm run db:seed
npm run start
```

# Sucesso

Após executar uma das etapas para inicialização do projeto, você verá uma mensagem:

```sh
Servidor rodando em: localhost:3000
```

Isso significa que o servidor backend já está funcionando, e escutando requisições na porta 3000.

Para melhor visualização dos endpoints, utilize a documentação do Swagger:

[Documentação OpenAPI](http://localhost:3000/swagger)