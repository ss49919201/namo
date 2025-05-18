import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const example = sqliteTable('example', {
  id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  createdDate: text('created_date').notNull(), // RFC3339 ex)2006-01-02T15:04:05Z07:00
  updatedDate: text('updated_date').notNull(), // RFC3339 ex)2006-01-02T15:04:05Z07:00
});
