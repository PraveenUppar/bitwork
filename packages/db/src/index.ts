import { SQL } from "bun";
import { drizzle } from "drizzle-orm/bun-sql";

import { env } from "./env";
import { posts } from "./schema";

const schema = { posts };

/**
 * Cache the database connection in development.
 * This avoids creating a new connection on every HMR update.
 */
const globalForDb = globalThis as unknown as {
  client: SQL | undefined;
};

const client =
  globalForDb.client ??
  new SQL(env.DATABASE_URL, {
    prepare: false, // Disable prepared statements for Supabase Transaction Mode
  });
if (process.env.NODE_ENV !== "production") {
  globalForDb.client = client;
}

export const db = drizzle(client, { schema });
