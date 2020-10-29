export type Raw<T> = {
  [P in keyof T]: string | undefined;
};
