"use client";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import loginImage from "@/assets/login-pana.png";
import DCForm from "@/components/Form/DCForm";
import FormInput from "@/components/Form/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, isLoggedIn, storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

type TFormValues = {
  email: string;
  password: string;
};
// Kiera.Kiehn78@yahoo.com
const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const defaultValues = {
    email: "arifurr231@gmail.com",
    password: "super_admin",
  };
  const onSubmit: SubmitHandler<TFormValues> = async (data: any) => {
    //

    try {
      const res = await userLogin({ ...data }).unwrap();

      console.log(res);

      if (res?.accessToken) {
        router.push("/profile");
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
          <DCForm submitHandler={onSubmit} defaultValues={defaultValues}>
            <div>
              <FormInput name="email" type="text" size="large" label="User Id" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput name="password" type="password" size="large" label="User Password" />
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
