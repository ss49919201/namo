import { eq } from "drizzle-orm";
import { ok, error, Result } from "../result/result";
import { Database } from "../infra/db/connection";
import { montos } from "../infra/db/d1/schema";

export type DeleteMontoInput = {
  id: number;
};

export type DeleteMontoOutput = {
  deletedId: number;
};

export async function deleteMonto(
  db: Database,
  input: DeleteMontoInput
): Promise<Result<DeleteMontoOutput>> {
  try {
    const [deleted] = await db
      .delete(montos)
      .where(eq(montos.id, input.id))
      .returning({ id: montos.id });

    if (!deleted) {
      return error(new Error(`Monto with id ${input.id} not found`));
    }

    return ok({ deletedId: deleted.id });
  } catch (err) {
    return error(new Error(`Failed to delete monto: ${(err as Error).message}`));
  }
}