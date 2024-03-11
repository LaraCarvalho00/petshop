import { db } from "../../db/client";
import { getAllPetshops } from "./petshop.service";

export type CalculateBestPetshopInput = {
  bigDogs: number;
  smallDogs: number;
  date: Date;
};

export type CalculateBestPetshopOutput = {
  petshop: Awaited<ReturnType<typeof getAllPetshops>>[0];
  totalPrice: number;
};
