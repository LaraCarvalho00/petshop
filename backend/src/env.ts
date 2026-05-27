import { z } from "zod";

// TODO(code-review): adicionar PORT e CORS_ORIGIN ao schema deixaria configuracoes de runtime mais explicitas.
const envSchema = z.object({
  DATABASE_URL: z.string().url().min(1),
});

export const env = envSchema.parse(process.env);
