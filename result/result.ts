export type Ok<T> = {
  ok: true;
  data: T;
};

export type Error = {
  ok: false;
  error: Error;
};

export type Result<T> = Ok<T> | Error;

export function ok<T>(data: T): Result<T> {
  return {
    ok: true,
    data,
  };
}

export function error(error: Error): Result<never> {
  return {
    ok: false,
    error,
  };
}
