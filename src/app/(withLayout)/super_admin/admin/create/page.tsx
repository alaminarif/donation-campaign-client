"use client";
import DCForm from "@/components/Form/DCForm";
import FormDatePicker from "@/components/Form/FormDatePicker";
import FormInput from "@/components/Form/FormInput";
import FormSelectFiled from "@/components/Form/FormSelectFiled";
import FormTextArea from "@/components/Form/FormTextArea";

import DCBreadcrumb from "@/components/ui/DCBreadcrumb";
import UploadImage from "@/components/ui/UploadImage";
import { bloodGroupOptions, genderOptions } from "@/components/shared/constants/global";
import { adminSchema } from "@/schemas/admin";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Form, Input, message, Row, Space } from "antd";
import { useState } from "react";
import { useAddAdminMutation } from "@/redux/api/adminApi";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";

const CreateAdminPage = () => {
  const [imgFile, setImgFile] = useState(null);
  // const imag_hosting = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_API}`;

  const [addAdmin, { data, error }] = useAddAdminMutation();

  if (error) {
    console.error("Error adding admin:", error);
  }

  console.log(data);

  // const uploadImage = async (file: any) => {
  //   // setLoading(true);
  //   const response = await fetch("https://api.cloudinary.com/v1_1/dqk1og6f4/image/upload", {
  //     method: "POST",
  //     body: file,
  //   });
  //   const data = await response.json();
  //   // console.log(response);

  //   return data;
  // };

  const uploadImage = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "donation-campign");

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/dqk1og6f4/image/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("Error Response:", error);
        throw new Error(error.error.message || "Failed to upload image");
      }

      const data = await response.json();

      console.log("Upload Success:", data);
      return data;
    } catch (error) {
      console.error("Upload Error:", error.message);
      throw error;
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (formValues) => {
    const adminData = {
      password: formValues.password,
      admin: formValues,
    };

    addAdmin(adminData);

    console.log(adminData);

    // try {
    //   const pictureInfo = await uploadImage(imgFile);
    //   console.log(pictureInfo);

    //   if (pictureInfo?.secure_url) {
    //     // await addAdmin({ profileImg: pictureInfo?.secure_url, adminData }).unwrap();
    //     message.success("Admin created successfully!");
    //   } else {
    //     message.error("Failed to upload image.");
    //   }
    // } catch (error) {
    //   message.error(error.message || "Something went wrong.");
    // }
  };

  return (
    <div>
      <DCBreadcrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "admin",
            link: "/super_admin/admin",
          },
        ]}
      />

      <h1>Create Admin</h1>
      <div
        style={{
          margin: "10px 30px",
        }}
      >
        <DCForm onSubmit={onSubmit} resolver={yupResolver(adminSchema)}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "15px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Admin Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput type="text" name="name.firstName" size="large" label="First Name" />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput type="text" name="name.lastName" size="large" label="Last Name" />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput type="password" name="password" size="large" label="Password" />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectFiled name="gender" size="large" label="Gender" options={genderOptions} placeholder="Select" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <Controller
                  name="image"
                  render={({ field: { onChange, value, ...field } }) => (
                    <Form.Item label="Picture">
                      <Input
                        type="file"
                        {...field}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          onChange(file); // For React Hook Form
                          setImgFile(file); // For uploading
                        }}
                      />
                    </Form.Item>
                  )}
                />
              </Col>
            </Row>

            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Basic Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput type="text" name="email" size="large" label="Email" />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput type="text" name="contactNo" size="large" label="Contact No" />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormDatePicker name="dateOfBirth" size="large" label="Date Of Birth" />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectFiled name="bloodGroup" size="large" label="Boold Group" options={bloodGroupOptions} placeholder="Select" />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormTextArea name="address" label="Address" />
              </Col>
            </Row>
          </div>
          <Button htmlType="submit">Create</Button>
        </DCForm>
      </div>
    </div>
  );
};

export default CreateAdminPage;

// name: {
//           firstName: formValues.name.firstName,
//           lastName: formValues.name.lastName,
//         },
//         gender: formValues.gender,
//         email: formValues.email,
//         contactNo: formValues.contactNo,
//         dateOfBirth: formValues.dateOfBirth,
//         bloodGroup: formValues.bloodGroup,
//         address: formValues.address,
//       },
