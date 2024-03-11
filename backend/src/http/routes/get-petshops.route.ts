import Elysia from "elysia";
import { getAllPetshops } from "../../services/petshop/petshop.service";

export const getPetshopsRoute = new Elysia().get("/petshop", async () => {
  return await getAllPetshops();
});
