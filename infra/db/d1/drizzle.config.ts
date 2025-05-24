import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './infra/db/d1/schema.ts',
  out: './infra/db/d1/migrations',
  dialect: 'sqlite',
  driver: 'd1-http',
});
