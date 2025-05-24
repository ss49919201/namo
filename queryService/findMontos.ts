import { like, or } from "drizzle-orm";
import { Database } from "../infra/db/connection";
import { montos } from "../infra/db/d1/schema";

export type FindMontosInput = {
  searchTerm?: string;
  limit?: number;
  offset?: number;
};

export type FindMontosOutput = {
  items: {
    id: number;
    headName: string;
    address: string;
    phone: string;
    note?: string;
  }[];
  total: number;
};

export async function findMontos(
  db: Database,
  input: FindMontosInput = {}
): Promise<FindMontosOutput> {
  const { searchTerm, limit = 50, offset = 0 } = input;

  const whereCondition = searchTerm
    ? or(
        like(montos.headName, `%${searchTerm}%`),
        like(montos.address, `%${searchTerm}%`),
        like(montos.phone, `%${searchTerm}%`)
      )
    : undefined;

  const items = await db
    .select()
    .from(montos)
    .where(whereCondition)
    .limit(limit)
    .offset(offset);
  
  const countQuery = searchTerm
    ? db.select({ count: db.$count(montos) }).from(montos).where(whereCondition)
    : db.select({ count: db.$count(montos) }).from(montos);
    
  const [{ count }] = await countQuery;

  return {
    items: items.map(item => ({
      ...item,
      note: item.note ?? undefined,
    })),
    total: count,
  };
}
