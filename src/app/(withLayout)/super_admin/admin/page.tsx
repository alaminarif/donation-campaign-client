"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Actionbar from "@/components/ui/Actionbar";
import DCBreadcrumb from "@/components/ui/DCBreadcrumb";
import { useDeleteAdminMutation, useGetAllAdminsQuery } from "@/redux/api/adminApi";
import { TAdmin, TQueryParam } from "@/types";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Input, message, Pagination, Table, TableColumnsType, TableProps } from "antd";
import Loading from "@/app/loading";
import dayjs from "dayjs";

export type TTbaleData = Pick<TAdmin, "id" | "fullName" | "email" | "contactNo" | "dateOfBirth" | "bloodGroup" | "gender">;

const Adminpage = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSerchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 900);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    const updatedParams = params.filter((param) => param.name !== "searchTerm");
    if (debouncedSearchTerm) {
      // Add the new searchTerm only once
      updatedParams.push({ name: "searchTerm", value: debouncedSearchTerm });
    }
    setParams(updatedParams);
  }, [debouncedSearchTerm]);

  const { data: adminData, isLoading, isFetching } = useGetAllAdminsQuery([{ name: "page", value: page }, { name: "sort", value: "id" }, ...params]);

  const [deleteAdmin] = useDeleteAdminMutation();

  if (isLoading) {
    return <Loading />;
  }

  const admins = Array.isArray(adminData?.data) ? adminData.data : [];
  const meta = adminData?.meta;

  const deleteHandler = async (id: string) => {
    message.loading("Deleting...");
    try {
      await deleteAdmin(id);
    } catch (error: any) {
      message.error(error.message);
    }
  };
  const tableData = admins?.map(({ _id, id, fullName, email, contactNo, dateOfBirth, gender, bloodGroup }) => ({
    key: _id,
    fullName,
    email,
    id,
    contactNo,
    dateOfBirth,
    gender,
    bloodGroup,
  }));

  const columns: TableColumnsType<TTbaleData> = [
    {
      title: "Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      filters: [
        {
          text: "admin@gmail.com",
          value: "admin@gmail.com",
        },
      ],
    },

    {
      title: "Contact No",
      dataIndex: "contactNo",
    },
    {
      title: "DateOfBirth",
      dataIndex: "dateOfBirth",
      render: function (data: any) {
        return data && dayjs(data).format("YYYY MMM D");
      },
    },
    {
      title: "Blood Group",
      dataIndex: "bloodGroup",
    },

    {
      title: "Gender",
      dataIndex: "gender",
      filters: [
        {
          text: "male",
          value: "male",
        },
        {
          text: "female",
          value: "female",
        },
      ],
    },

    {
      title: "Action",

      render: function (data: any) {
        return (
          <>
            <Link href={`/super_admin/admin/details/${data?.key}`}>
            <Button 
            // onClick={() => console.log(data)}
             type="primary">
              <EyeOutlined />
            </Button>
            </Link>

            <Link href={`/super_admin/admin/edit/${data?.key}`}>
              <Button
                style={{
                  margin: "0 5px",
                }}
                // onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>

            <Button onClick={() => deleteHandler(data?.id)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onChange: TableProps<TTbaleData>["onChange"] = (pagination, filters, sorter, extra) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];
      filters.gender?.forEach((item) => queryParams.push({ name: "gender", value: item }));
      filters.email?.forEach((item) => queryParams.push({ name: "email", value: item }));
      console.log(queryParams);
      setParams(queryParams);
    }

    console.log(extra.action);
  };

  return (
    <div
      style={{
        margin: "0 15px",
      }}
    >
      <DCBreadcrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />
      <Actionbar title="Admin List">
        <Input
          type="text"
          size="large"
          placeholder="Search..."
          style={{ width: "20%" }}
          onChange={(e) => {
            setSerchTerm(e.target.value);
          }}
        />

        <div>
          <Link href="/super_admin/admin/create">
            <Button type="primary">Create Admin</Button>
          </Link>
        </div>
      </Actionbar>

      <>
        <Table loading={isFetching} columns={columns} dataSource={tableData} onChange={onChange} pagination={false} />
        <Pagination current={page} onChange={(value) => setPage(value)} pageSize={meta?.limit} total={meta?.total} />
      </>
    </div>
  );
};

export default Adminpage;
