import * as yup from "yup";
// import { object, string, number, date, InferType } from "yup";
export const adminSchema = yup.object().shape({
  password: yup.string().min(6).max(16).required(),
  admin: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
    }),
    email: yup.string().email().required("Email is required"),
  }),
});
