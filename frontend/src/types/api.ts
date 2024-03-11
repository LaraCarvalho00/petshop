export type CalculateRequest = {
  bigDogs: number;
  smallDogs: number;
  date: string;
};

type Petshop = {
  id: number;
  name: string;
  distance: number;
  bigBreedPriceAtWeek: number;
  smallBreedPriceAtWeek: number;
  bigBreedPriceAtWeekend: number;
  smallBreedPriceAtWeekend: number;
  createdAt: string;
  updatedAt: string;
};

export type CalculateResponse = {
  petshop: Petshop;
  totalPrice: number;
};
