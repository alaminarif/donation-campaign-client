export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

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
  managementDepartment: string;
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
