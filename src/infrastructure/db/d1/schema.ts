import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const example = sqliteTable('example', {
  id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  createdDate: text('created_date').notNull(), // RFC3339 ex)2006-01-02T15:04:05Z07:00
  updatedDate: text('updated_date').notNull(), // RFC3339 ex)2006-01-02T15:04:05Z07:00
});

export const montos = sqliteTable('montos', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  headName: text('head_name').notNull(), // 門徒世帯主名
  address: text('address').notNull(), // 住所
  phone: text('phone').notNull(), // 電話番号
  note: text('note'), // 備考（任意）
});
