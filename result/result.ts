export type Ok<T> = {
  ok: true;
  data: T;
};

export type ErrorResult = {
  ok: false;
  error: Error;
};

export type Result<T> = Ok<T> | ErrorResult;

export function ok<T>(data: T): Result<T> {
  return {
    ok: true,
    data,
  };
}

export function error(err: Error): Result<never> {
  return {
    ok: false,
    error: err,
  };
}
