import { ok, Result } from "../result/result";

export type CreateMontoInput = {};

export type CreateMontoOutput = {};

export function createMonto(
  input: CreateMontoInput
): Result<CreateMontoOutput> {
  return ok({});
}
