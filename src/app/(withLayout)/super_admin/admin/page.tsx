"use client";

import { DeleteOutlined, EditOutlined, EyeOutlined, ReloadOutlined } from "@ant-design/icons";
import Actionbar from "@/components/ui/Actionbar";
import DCBreadcrumb from "@/components/ui/DCBreadcrumb";
import { useGetAllAdminsQuery } from "@/redux/api/adminApi";
import { TAdmin, TQueryParam } from "@/types";
import { Button, Input, Pagination, Table, TableColumnsType, TableProps } from "antd";
import Link from "next/link";
import React, { useState } from "react";

export type TTbaleData = Pick<TAdmin, "name" | "email" | "contactNo" | "dateOfBirth" | "bloogGroup" | "gender">;

const Adminpage = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const {
    data: adminData,
    isLoading,
    isFetching,
  } = useGetAllAdminsQuery([{ name: "limit", value: 3 }, { name: "page", value: page }, { name: "sort", value: "email" }, ...params]);

  if (isLoading) {
    return <p>loading...</p>;
  }

  const admins = Array.isArray(adminData?.data) ? adminData.data : [];
  const meta = adminData?.meta;

  const tableData = admins?.map(({ name, email, contactNo, dateOfBirth, gender, bloogGroup }) => ({
    name,
    email,
    contactNo,
    dateOfBirth,
    gender,
    bloogGroup,
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
      dataIndex: "bloogGroup",
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
  };

  return (
    <div>
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
            console.log(e.target.value);
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
