export type BaseApiResponseType<T> = {
  msg: string;
  msgCode: string;
  code: number;
  data: T;
};
