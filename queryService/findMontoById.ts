export type FindMontoByIdInput = {
  id: string;
};

export type FindMontoByIdOutput = {
  id: string;
};

export function findMontoById(input: FindMontoByIdInput): FindMontoByIdOutput {
  return {
    id: input.id,
  };
}
