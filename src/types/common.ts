export interface IMeta {
  limit: number;
  page: number;
  size: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type TErrorResponse = {
  statusCode: number;
  message: string;
  errorMeassages: TErrorMessage;
};

export type TErrorMessage = {
  path: string | number;
  message: string;
};
