import { z } from "zod";
// import { object, string, number, date, InferType } from "yup";

// export const adminSchema = yup.object().shape({
//   password: yup.string().min(6).max(16).required(),
//   admin: yup.object().shape({
//     name: yup.object().shape({
//       firstName: yup.string().required("First name is required"),
//       lastName: yup.string().required("Last name is required"),
//     }),
//     gender: yup.string().required("gender no is required"),
//     email: yup.string().email().required("Email is required"),
//     contactNo: yup.string().required("Contact no is required"),
//     dateOfBirth: yup.string().required("Date of birth is required"),
//     bloodGroup: yup.string().required("Blood group is required"),
//     address: yup.string().required("address no is required"),
//     profileImg: yup.string().optional(),
//   }),
// });

// export const adminSchema = z.object({
//   password: z.string({ required_error: "password is required" }),
//   admin: z.object({
//     // name: z.object({
//     //   firstName: z.string({ required_error: "First name is required" }),
//     //   lastName: z.string({ required_error: "Last name is required" }),
//     // }),
//     gender: z.string({ required_error: "gender no is required" }),
//     // email: z.string({ required_error: "Email is required" }).email("email is invalid."),
//     // contactNo: z.string({ required_error: "Contact no is required" }),
//     // dateOfBirth: z.string({ required_error: "Date of birth is required" }),
//     // bloodGroup: z.string({ required_error: "Blood group is required" }),
//     // address: z.string({ required_error: "address no is required" }),
//     // profileImg: z.string().optional(),
//   }),
// });

export const adminSchema = z.object({
  password: z.string({ required_error: "password is required" }),
  firstName: z.string({ required_error: "First name is required" }),
  lastName: z.string({ required_error: "Last name is required" }),
  gender: z.string({ required_error: "gender no is required" }),
  email: z.string({ required_error: "Email is required" }).email("email is invalid."),
  contactNo: z.string({ required_error: "Contact no is required" }),
  dateOfBirth: z.custom<FormDataEntryValue>().optional(),
  bloodGroup: z.string({ required_error: "Blood group is required" }),
  address: z.string({ required_error: "address no is required" }),
  // profileImg: z.string().optional(),
});
