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

export const montoFamilies = sqliteTable('monto_families', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  montoId: integer('monto_id')
    .notNull()
    .references(() => montos.id), // 門徒ID（外部キー: montos.id）
  name: text('name').notNull(), // 家族構成員名
  relationship: text('relationship').notNull(), // 続柄
  note: text('note'), // 備考（任意）
});

export const deceasedPerson = sqliteTable('deceased_person', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  montoId: integer('monto_id')
    .notNull()
    .references(() => montos.id), // 門徒ID（外部キー: montos.id）
  name: text('name').notNull(), // 故人名
  homyo: text('homyo'), // 法名
  ingou: text('ingou'), // 院号
  meinichi: text('meinichi'), // 命日
  kyonen: integer('kyonen'), // 享年
  note: text('note'), // 備考（任意）
});

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull().unique(), // ユーザー名
  passwordHash: text('password_hash').notNull(), // パスワードハッシュ
  role: text('role').notNull(), // 権限情報
  lastLogin: text('last_login'), // 最終ログイン日時
});

export const hoyo = sqliteTable('hoyo', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  montoId: integer('monto_id')
    .notNull()
    .references(() => montos.id), // 門徒ID（外部キー: montos.id）
  deceasePersondId: integer('deceased_person_id')
    .notNull()
    .references(() => deceasedPerson.id), // 故人ID（外部キー: deceasedPerson.id）
  hoyoType: text('hoyo_type').notNull(), // 法要種別
  nenki: text('nenki'), // 年忌情報
  scheduledAt: text('scheduled_at'), // 予定日時
  note: text('note'), // 備考（任意）
});
