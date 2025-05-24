import { ok, Result } from "../result/result";

export type UpdateMontoInput = {
  previousUpdatedAt: Date;
};

export type UpdateMontoOutput = {};

export function updateMonto(
  input: UpdateMontoInput
): Result<UpdateMontoOutput> {
  return ok({});
}
