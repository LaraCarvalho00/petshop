import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "../env";
import { petshop } from "./schemas";

// TODO(code-review): encapsular o client em um modulo de infraestrutura facilita trocar o banco ou criar mocks em testes.
const client = postgres(env.DATABASE_URL);

export const db = drizzle(client, {
  schema: {
    petshop,
  },
});
