"use client";
import { useForgotPasswordMutation } from "@/redux/api/authApi";
import { message } from "antd";
import { FieldValues } from "react-hook-form";
import * as yup from "yup";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Alert, Box, Button, Grid, Stack, Typography } from "@mui/material";
// import { z } from "zod";
// import KeyIcon from "@mui/icons-material/Key";
// import PHForm from "@/components/Forms/PHForm";
// import PHInput from "@/components/Forms/PHInput";
// import { FieldValues } from "react-hook-form";
// import { useForgotPasswordMutation } from "@/redux/api/authApi";
// import { toast } from "sonner";
// import CheckIcon from "@mui/icons-material/Check";

const validationSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email address!"),
});

const ForgotPassword = () => {
  const [forgotPassword, { isSuccess }] = useForgotPasswordMutation();

  const onSubmit = async (values: FieldValues) => {
    try {
      const res = await forgotPassword(values);

      if ("data" in res && res.data.status === 200) {
        message.success("Check Your Email for Reset Link");
      } else {
        throw new Error("Something Went Wrong, Try Again");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return;
};

export default ForgotPassword;
