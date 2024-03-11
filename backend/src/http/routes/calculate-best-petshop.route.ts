import { db } from "../../db/client";
import { Elysia, t } from "elysia";
import { calculateBestPetshop } from "../../services/petshop/petshop.service";

export const calculateBestPetshopRoute = new Elysia().post(
  "/calculate-petshop",
  async ({ body }) => {
    return await calculateBestPetshop({
      bigDogs: body.bigDogs,
      smallDogs: body.smallDogs,
      date: new Date(body.date),
    });
  },
  {
    body: t.Object({
      bigDogs: t.Number(),
      smallDogs: t.Number(),
      date: t.String(),
    }),
  }
);
