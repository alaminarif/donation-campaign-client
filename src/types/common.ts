import { BaseQueryApi } from "@reduxjs/toolkit/query";

export interface IMeta {
  limit: number;
  page: number;
  total: number;
}
export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;
export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type TGenericErrorResponse = {
  statusCode: string;
  message: string;
  errorMessages: TGenericErrorMessage[];
};

export type TGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface Name {
  firstName: string;
  lastName: string;
}

export interface IAdmin {
  id: string;
  name: Name;
  gender: string;
  email: string;
  contactNo: string;
  dateOfBirth: string;
  bloodGroup: string;
  designation: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
