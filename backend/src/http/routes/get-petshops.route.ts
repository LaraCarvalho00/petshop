import Elysia from "elysia";
import { getAllPetshops } from "../../services/petshop/petshop.service";

// TODO(code-review): considerar renomear a rota para /petshops, no plural, pois o endpoint retorna uma lista.
export const getPetshopsRoute = new Elysia().get("/petshop", async () => {
  return await getAllPetshops();
});
