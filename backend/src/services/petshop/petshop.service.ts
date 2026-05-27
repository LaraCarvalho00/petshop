import { db } from "../../db/client";
import {
  CalculateBestPetshopInput,
  CalculateBestPetshopOutput,
} from "./petshop.types";

// TODO(code-review): extrair o acesso ao banco para um Repository/DAO e deixar este service focado na regra de negocio.
const getAllPetshops = async () => {
  const petshops = await db.query.petshop.findMany();

  // TODO(code-review): trocar esta checagem por petshops.length === 0, pois array vazio nao entra neste if.
  if (!petshops) {
    throw new Error("No petshops found");
  }

  return petshops;
};

const calculateBestPetshop = async ({
  bigDogs,
  smallDogs,
  date,
}: CalculateBestPetshopInput) => {
  // TODO(code-review): receber a lista de petshops por parametro facilitaria testes unitarios sem depender do banco.
  const petshops = await getAllPetshops();
  // TODO(code-review): padronizar timezone ou parser de data evita classificar incorretamente dias uteis e fins de semana.
  const isWeekend = date.getDay() === 0 || date.getDay() === 6; // 0 is Sunday, 6 is Saturday
  let result: CalculateBestPetshopOutput | null = null;

  for (const petshop of petshops) {
    const bigDogPrice = isWeekend
      ? petshop.bigBreedPriceAtWeekend
      : petshop.bigBreedPriceAtWeek;

    const smallDogPrice = isWeekend
      ? petshop.smallBreedPriceAtWeekend
      : petshop.smallBreedPriceAtWeek;

    const totalPrice = bigDogPrice * bigDogs + smallDogPrice * smallDogs;
    // TODO(code-review): extrair o calculo do preco para calculateTotalPrice deixaria esta regra mais legivel e testavel.

    if (!result) {
      result = {
        petshop,
        totalPrice,
      };
      continue;
    }

    const isCheaper = totalPrice < result?.totalPrice;
    // TODO(code-review): extrair a regra de desempate para isBetterPetshopOption deixaria a intencao do dominio mais clara.
    const isSamePriceButCloser =
      result?.totalPrice === totalPrice &&
      petshop.distance < result.petshop.distance;

    if (isCheaper || isSamePriceButCloser) {
      result = {
        petshop,
        totalPrice,
      };
    }
  }

  // TODO(code-review): explicitar no tipo que o retorno pode ser null ou lancar erro de dominio para lista vazia.
  return result;
};

export { getAllPetshops, calculateBestPetshop };
