import * as yup from "yup";
import { z } from "zod";

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

console.log(adminSchema);
