import { eq } from "drizzle-orm";
import { Database } from "../infra/db/connection";
import { montos } from "../infra/db/d1/schema";
import { error, ok, Result } from "../result/result";

export type UpdateMontoInput = {
  id: number;
  headName?: string;
  address?: string;
  phone?: string;
  note?: string;
};

export type UpdateMontoOutput = {
  id: number;
  headName: string;
  address: string;
  phone: string;
  note: string | null;
};

export async function updateMonto(
  db: Database,
  input: UpdateMontoInput
): Promise<Result<UpdateMontoOutput>> {
  try {
    const updateData: Partial<typeof montos.$inferInsert> = {};

    if (input.headName !== undefined) updateData.headName = input.headName;
    if (input.address !== undefined) updateData.address = input.address;
    if (input.phone !== undefined) updateData.phone = input.phone;
    if (input.note !== undefined) updateData.note = input.note;

    const [updated] = await db
      .update(montos)
      .set(updateData)
      .where(eq(montos.id, input.id))
      .returning();

    if (!updated) {
      return error(new Error(`Monto with id ${input.id} not found`));
    }

    return ok({
      ...updated,
    });
  } catch (err) {
    return error(
      new Error(`Failed to update monto: ${(err as Error).message}`)
    );
  }
}
