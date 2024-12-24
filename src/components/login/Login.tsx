"use client";
import { Button, Col, Input, message, Row } from "antd";
import Image from "next/image";
import loginImage from "@/assets/login-pana.png";
import DCForm from "@/components/Form/DCForm";
import DCInput from "@/components/Form/DCInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useState } from "react";

// type TFormValues = {
//   email: string;
//   password: string;
// };
// Kiera.Kiehn78@yahoo.com
const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const [inputType, setInputType] = useState<"email" | "id">("id");

  const defaultValues = {
    // email: "arifurr231@gmail.com",
    password: "super_admin",
  };
  const handleInputChange = (value: string) => {
    // Update the inputType based on the input value
    console.log(value);
    if (value.includes("@")) {
      setInputType("email");
    } else {
      setInputType("id");
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    //

    const payload = {
      [inputType]: data.dynamicInput,
      password: data.password, // Include password
    };

    console.log("Submitted Payload:", payload);

    // console.log(data);

    try {
      const res = await userLogin(payload).unwrap();

      if (res?.accessToken) {
        router.push("/profile");
        message.success("User Logged in successfully");
      }
      storeUserInfo({ accessToken: res?.accessToken });
      console.log(storeUserInfo);
    } catch (error) {
      console.error("error =>", error);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          First login your account
        </h1>
        <div>
          <DCForm onSubmit={onSubmit} defaultValues={defaultValues}>
            <div>
              <DCInput name="dynamicInput" type="text" label="Enter Email or User ID" onChange={(value) => handleInputChange(value)} />
            </div>

            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <DCInput name="password" type="password" label="User Password" />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </DCForm>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
