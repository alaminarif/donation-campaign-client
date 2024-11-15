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
import { Button, Col, message, Row, Space } from "antd";
import { useState } from "react";
import { useAddAdminMutation } from "@/redux/api/adminApi";

const CreateAdminPage = () => {
  const [imgFile, setImgFile] = useState(null);
  // const imag_hosting = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_API}`;

  const [addAdminData] = useAddAdminMutation();

  const uploadImage = async (file: any) => {
    // setLoading(true);
    const response = await fetch("https://api.cloudinary.com/v1_1/dqk1og6f4/image/upload", {
      method: "POST",
      body: file,
    });
    const data = await response.json();

    return data;
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    // const data = JSON.stringify(obj);
    const file = new FormData();
    file.append("file", imgFile);
    file.append("upload_preset", "donation-campign");
    const pictureInfo = await uploadImage(file);
    if (pictureInfo?.secure_url) {
    }
    message.loading("Creating...");
    console.log("obj");
    try {
      console.log("data");
    } catch (error: any) {
      console.error(error.message);
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

      <h1>Create Admin</h1>
      <div
        style={{
          margin: "10px 30px",
        }}
      >
        <DCForm submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
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
                <FormInput type="text" name="admin.name.firstName" size="large" label="First Name" />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput type="text" name="admin.name.lastName" size="large" label="Last Name" />
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
                <FormSelectFiled name="admin.gender" size="large" label="Gender" options={genderOptions} placeholder="Select" />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <UploadImage name="file" />
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
                <FormInput type="text" name="admin.email" size="large" label="Email" />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput type="text" name="admin.contactNo" size="large" label="Contact No" />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormDatePicker name="admin.dateOfBirth" size="large" label="Date Of Birth" />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectFiled name="admin.bloodGroup" size="large" label="Boold Group" options={bloodGroupOptions} placeholder="Select" />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormTextArea name="admin.address" label="Address" />
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

//  const uploadImage = async (file) => {
//    setLoading(true);
//    const response = await fetch("https://api.cloudinary.com/v1_1/dfmdacf6w/image/upload", {
//      method: "POST",
//      body: file,
//    });
//    const data = await response.json();

//    return data;
//  };
