import { pgTable, text, timestamp, serial, integer } from "drizzle-orm/pg-core";

export const petshop = pgTable("petshops", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  distance: integer("distance_in_meters").notNull(), // In meters
  bigBreedPriceAtWeek: integer("big_breed_price_at_week").notNull(), // In cents
  smallBreedPriceAtWeek: integer("small_breed_price_at_week").notNull(), // In cents
  bigBreedPriceAtWeekend: integer("big_breed_price_at_weekend").notNull(), // In cents
  smallBreedPriceAtWeekend: integer("small_breed_price_at_weekend").notNull(), // In cents
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
