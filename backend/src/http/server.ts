import { Elysia } from "elysia";
import { getPetshopsRoute } from "./routes/get-petshops.route";
import { calculateBestPetshopRoute } from "./routes/calculate-best-petshop.route";
import swagger from "@elysiajs/swagger";
import cors from "@elysiajs/cors";

const app = new Elysia()
  .use(swagger())
  .use(cors())
  .use(getPetshopsRoute)
  .use(calculateBestPetshopRoute)
  .listen(3000);

console.log(`Servidor rodando em: ${app.server?.hostname}:${app.server?.port}`);
