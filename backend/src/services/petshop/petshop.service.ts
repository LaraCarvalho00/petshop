import { db } from "../../db/client";
import {
  CalculateBestPetshopInput,
  CalculateBestPetshopOutput,
} from "./petshop.types";

const getAllPetshops = async () => {
  const petshops = await db.query.petshop.findMany();

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
  const petshops = await getAllPetshops();
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

    if (!result) {
      result = {
        petshop,
        totalPrice,
      };
      continue;
    }

    const isCheaper = totalPrice < result?.totalPrice;
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

  return result;
};

export { getAllPetshops, calculateBestPetshop };
