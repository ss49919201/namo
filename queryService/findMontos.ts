export type FindMontosInput = {
  id: string;
};

export type FindMontosOutput = {
  items: {
    id: string;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
  }[];
};

export function findMontos(input: FindMontosInput): FindMontosOutput {
  return {
    items: [],
  };
}
