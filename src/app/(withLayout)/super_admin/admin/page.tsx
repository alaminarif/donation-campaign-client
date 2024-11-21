"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Actionbar from "@/components/ui/Actionbar";
import DCBreadcrumb from "@/components/ui/DCBreadcrumb";
import { useGetAllAdminsQuery } from "@/redux/api/adminApi";
import { TAdmin, TQueryParam } from "@/types";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Input, Pagination, Table, TableColumnsType, TableProps } from "antd";

export type TTbaleData = Pick<TAdmin, "name" | "email" | "contactNo" | "dateOfBirth" | "bloodGroup" | "gender">;

const Adminpage = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSerchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");

  useEffect(() => {
    // Set a timer to update debouncedSearchTerm after a delay
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 900); // 500 ms delay (adjust as needed)

    // Clear the timer if the user types within the delay
    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    // Start with all existing parameters except "searchTerm"
    const updatedParams = params.filter((param) => param.name !== "searchTerm");
    if (debouncedSearchTerm) {
      // Add the new searchTerm only once
      updatedParams.push({ name: "searchTerm", value: debouncedSearchTerm });
    }
    setParams(updatedParams);
  }, [debouncedSearchTerm]);

  const {
    data: adminData,
    isLoading,
    isFetching,
  } = useGetAllAdminsQuery([{ name: "page", value: page }, { name: "sort", value: "email" }, ...params]);

  if (isLoading) {
    return <p>loading...</p>;
  }

  const admins = Array.isArray(adminData?.data) ? adminData.data : [];
  const meta = adminData?.meta;

  const tableData = admins?.map(({ _id, name, email, contactNo, dateOfBirth, gender, bloodGroup }) => ({
    key: _id,
    name,
    email,
    contactNo,
    dateOfBirth,
    gender,
    bloodGroup,
  }));

  const columns: TableColumnsType<TTbaleData> = [
    {
      title: "Name",
      dataIndex: "name",
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
            <Button onClick={() => console.log(data)} type="primary">
              <EyeOutlined />
            </Button>

            <Button
              style={{
                margin: "0 5px",
              }}
              onClick={() => console.log(data)}
              type="primary"
            >
              <EditOutlined />
            </Button>

            <Button onClick={() => console.log(data)} type="primary" danger>
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
