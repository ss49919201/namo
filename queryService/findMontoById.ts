import { eq } from "drizzle-orm";
import { Database } from "../infra/db/connection";
import { montos } from "../infra/db/d1/schema";

export type FindMontoByIdInput = {
  id: number;
};

export type FindMontoByIdOutput = {
  id: number;
  headName: string;
  address: string;
  phone: string;
  note?: string;
} | null;

export async function findMontoById(
  db: Database,
  input: FindMontoByIdInput
): Promise<FindMontoByIdOutput> {
  const [monto] = await db
    .select()
    .from(montos)
    .where(eq(montos.id, input.id))
    .limit(1);

  if (!monto) {
    return null;
  }

  return {
    ...monto,
    note: monto.note ?? undefined,
  };
}
