import { petshop } from "../../db/schemas";
import { db } from "../../db/client";

/**
 * Reset database
 */
await db.delete(petshop).execute();

await db
  .insert(petshop)
  .values([
    {
      name: "Meu Canino Feliz",
      distance: 2000,
      smallBreedPriceAtWeek: 20 * 100,
      smallBreedPriceAtWeekend: 20 * 100 * 1.2, // 20% more expensive
      bigBreedPriceAtWeek: 40 * 100,
      bigBreedPriceAtWeekend: 40 * 100 * 1.2, // 20% more expensive
    },
    {
      name: "Vai Rex",
      distance: 1700,
      smallBreedPriceAtWeek: 15 * 100,
      smallBreedPriceAtWeekend: 20 * 100,
      bigBreedPriceAtWeek: 50 * 100,
      bigBreedPriceAtWeekend: 55 * 100,
    },
    {
      name: "ChowChawgas",
      distance: 800,
      smallBreedPriceAtWeek: 30 * 100,
      smallBreedPriceAtWeekend: 30 * 100,
      bigBreedPriceAtWeek: 45 * 100,
      bigBreedPriceAtWeekend: 45 * 100,
    },
  ])
  .execute();

console.log("Petshops inserted successfully!");

process.exit();
