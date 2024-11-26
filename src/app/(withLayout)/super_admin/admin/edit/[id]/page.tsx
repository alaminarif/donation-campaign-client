"use client";

import React, { useState } from "react";
import Actionbar from "@/components/ui/Actionbar";
import DCBreadcrumb from "@/components/ui/DCBreadcrumb";
import DCForm from "@/components/Form/DCForm";
import { Button, Col, Form, Input, message, Row } from "antd";
import FormInput from "@/components/Form/FormInput";
import FormSelectFiled from "@/components/Form/FormSelectFiled";
import { bloodGroupOptions, genderOptions } from "@/components/shared/constants/global";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import FormDatePicker from "@/components/Form/FormDatePicker";
import FormTextArea from "@/components/Form/FormTextArea";
import { useGetSingleAdminQuery, useUpdateAdminMutation } from "@/redux/api/adminApi";
import Loading from "@/app/loading";
type TIdProps = {
  params: any;
};

const EditAdminPage = ({ params }: TIdProps) => {
  const { email, id } = params;
  console.log("params", params, email);

  const [imgFile, setImgFile] = useState<Blob | null>(null);

  const { data: adminData, isFetching, isLoading } = useGetSingleAdminQuery(params?.id);

  const [updateAdmin, { data, error }] = useUpdateAdminMutation(id);

  if (isLoading) {
    return <Loading />;
  }

  console.log("updat amin data query =>");
  console.log(data);

  if (error) {
    console.error("Error adding admin:", error);
  }

  const adminDefaultData = {
    // password: formValues.password,
    // admin: {
    //   name: {
    //     firstName: adminData.name.firstName || "",
    //     lastName: adminData.name.lastName || "",
    //   },
    //   gender: adminData.gender || "",
    //   email: adminData.email || "",
    //   contactNo: adminData.contactNo || "",
    //   dateOfBirth: adminData.dateOfBirth || "",
    //   bloodGroup: adminData.bloodGroup || "",
    //   address: adminData.address || "",
    //   // profileImg: pictureInfo?.secure_url || null,
    // },
  };

  const uploadImage = async (file: Blob) => {
    if (!file) {
      return null;
    }
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
      console.error("Upload Error:", error);
      throw error;
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (formValues) => {
    console.log("click");
    let pictureInfo = null;

    if (imgFile) {
      try {
        pictureInfo = await uploadImage(imgFile);
      } catch (error) {
        console.error("Image upload failed:", error);
        message.error("Failed to upload image. Please try again.");
        return;
      }
    }

    const adminData = {
      password: formValues.password,
      admin: {
        name: {
          firstName: formValues.firstName,
          lastName: formValues.lastName,
        },
        gender: formValues.gender,
        email: formValues.email,
        contactNo: formValues.contactNo,
        dateOfBirth: formValues.dateOfBirth,
        bloodGroup: formValues.bloodGroup,
        address: formValues.address,
        profileImg: pictureInfo ? pictureInfo.secure_url : null,
      },
    };

    try {
      //  await addAdmin(adminData);
      message.success("Admin created successfully!");
      console.log("Admin data =>", adminData);
      console.log(adminData.admin.profileImg);
    } catch (error) {
      console.error("Error adding admin:", error);
      message.error("Failed to create admin. Please try again.");
    }
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
      <Actionbar title="Update Admin "></Actionbar>

      <DCForm onSubmit={onSubmit} defaultValues={adminDefaultData}>
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
              <FormInput type="text" name="firstName" size="large" label="First Name" />
            </Col>

            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormInput type="text" name="lastName" size="large" label="Last Name" />
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
                        const file = e.target.files?.[0] || null;
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
  );
};

export default EditAdminPage;
