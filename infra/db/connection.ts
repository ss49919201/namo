import { drizzle } from "drizzle-orm/d1";
import * as schema from "./d1/schema";

export function getDatabase(env: { D1: D1Database }) {
  return drizzle(env.D1, { schema });
}

export type Database = ReturnType<typeof getDatabase>;
