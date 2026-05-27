import postgres from "postgres";
import { env } from "../../env";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";

// TODO(code-review): tratar erros de migracao com mensagens mais claras ajuda troubleshooting em ambientes de deploy.
const client = postgres(env.DATABASE_URL, {
  max: 1,
});
const db = drizzle(client);

await migrate(db, { migrationsFolder: "./migrations" });

console.log("Database migrated successfully");

await client.end();

process.exit();
