export type WrappedPromise<T> = {
  data: {
    read(): T | undefined;
  };
};

export const wrapPromise = <T>(promise: Promise<T>) => {
  let status = "pending";
  let result: T;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
};

export const createResource = <T extends any>
(apiFetch: (...args: any) => Promise<T>) =>
    (...args: any): WrappedPromise<T> =>
      ({ data: wrapPromise<T>(apiFetch(...args)) });

