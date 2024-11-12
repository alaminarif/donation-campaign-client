export type TName = {
  firstName: string;
  lastName: string;
  _id: string;
};
export type TAdmin = {
  _id: string;
  user: string;
  email: string;
  name: TName;
  gender: string;
  contactNo: string;
  bloogGroup?: string;
  dateOfBirth?: string;
  profileImg?: string;
  address: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};