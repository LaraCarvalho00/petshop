import { Elysia } from "elysia";
import { getPetshopsRoute } from "./routes/get-petshops.route";
import { calculateBestPetshopRoute } from "./routes/calculate-best-petshop.route";
import swagger from "@elysiajs/swagger";
import cors from "@elysiajs/cors";

// TODO(code-review): configurar CORS e porta por variaveis de ambiente melhora seguranca e flexibilidade de deploy.
const app = new Elysia()
  .use(swagger())
  // TODO(code-review): restringir origens permitidas no CORS reduz exposicao da API em producao.
  .use(cors())
  .use(getPetshopsRoute)
  .use(calculateBestPetshopRoute)
  // TODO(code-review): usar process.env.PORT em vez de porta fixa facilita deploy em ambientes diferentes.
  .listen(3000);

console.log(`Servidor rodando em: ${app.server?.hostname}:${app.server?.port}`);
