import { Database } from "../infra/db/connection";
import { montos } from "../infra/db/d1/schema";
import { error, ok, Result } from "../result/result";

export type CreateMontoInput = {
  headName: string;
  address: string;
  phone: string;
  note?: string;
};

export type CreateMontoOutput = {
  id: number;
  headName: string;
  address: string;
  phone: string;
  note: string | null;
};

export async function createMonto(
  db: Database,
  input: CreateMontoInput
): Promise<Result<CreateMontoOutput>> {
  try {
    const [inserted] = await db
      .insert(montos)
      .values({
        headName: input.headName,
        address: input.address,
        phone: input.phone,
        note: input.note,
      })
      .returning();

    return ok({
      ...inserted,
    });
  } catch (err) {
    return error(
      new Error(`Failed to create monto: ${(err as Error).message}`)
    );
  }
}
