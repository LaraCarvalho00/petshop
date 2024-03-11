CREATE TABLE IF NOT EXISTS "petshops" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"distance_in_meters" integer NOT NULL,
	"big_breed_price_at_week" integer NOT NULL,
	"small_breed_price_at_week" integer NOT NULL,
	"big_breed_price_at_weekend" integer NOT NULL,
	"small_breed_price_at_weekend" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
