import { db } from "../../db/client";
import { Elysia, t } from "elysia";
import { calculateBestPetshop } from "../../services/petshop/petshop.service";

// TODO(code-review): remover o import de db, pois ele nao e utilizado e cria ruido na rota.
export const calculateBestPetshopRoute = new Elysia().post(
  "/calculate-petshop",
  async ({ body }) => {
    // TODO(code-review): validar data e quantidades antes de montar o input evita regras de negocio com dados invalidos.
    return await calculateBestPetshop({
      bigDogs: body.bigDogs,
      smallDogs: body.smallDogs,
      date: new Date(body.date),
    });
  },
  {
    body: t.Object({
      // TODO(code-review): exigir inteiros maiores ou iguais a zero evita quantidades negativas ou decimais.
      bigDogs: t.Number(),
      smallDogs: t.Number(),
      // TODO(code-review): validar formato YYYY-MM-DD e data real antes de converter com new Date.
      date: t.String(),
    }),
  }
);
