"use client";

import { DeleteOutlined, EditOutlined, EyeOutlined, ReloadOutlined } from "@ant-design/icons";
import Actionbar from "@/components/ui/Actionbar";
import DCBreadcrumb from "@/components/ui/DCBreadcrumb";
import DCTable from "@/components/ui/DCTable";
import { useGetAllAdminsQuery } from "@/redux/api/adminApi";
import { TAdmin, TQueryParam } from "@/types";
import { Button, Input, Table, TableColumnsType, TableProps } from "antd";
import Link from "next/link";
import React, { useState } from "react";

export type TTbaleData = Pick<TAdmin, "name" | "email">;

const Adminpage = () => {
  // const query: Record<string, any> = {};

  // const [page, setPage] = useState<number>(1);
  // const [size, setSize] = useState<number>(10);
  // const [sortBy, setSortBy] = useState<string>("");
  // const [sortOrder, setSortOrder] = useState<string>("");
  // const [searchTerm, setSearchTerm] = useState<string>("");
  // const [open, setOpen] = useState<boolean>(false);
  // const [adminId, setAdminId] = useState<string>("");

  // query["limit"] = size;
  // query["page"] = page;
  // query["sortBy"] = sortBy;
  // query["sortOrder"] = sortOrder;
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const {
    data: adminData,
    isLoading,
    isFetching,
  } = useGetAllAdminsQuery([{ name: "page", value: page }, { name: "sort", value: "email" }, ...params]);

  // const { data, isLoading } = useGetAllAdminsQuery({ ...query });
  if (isLoading) {
    return <p>loading...</p>;
  }
  //ts-ignore
  // const admins = adminData?.data;
  // const meta = adminData?.meta;

  // if (isLoading) {
  //   return <p>loading...</p>;
  // }
  // console.log(meta);
  const admins = Array.isArray(adminData?.data) ? adminData.data : [];
  console.log(admins);
  const tableData = admins?.map(({ name, email }) => ({ name, email }));
  console.log(tableData);

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
          text: "email",
          value: "admin@gmail.com",
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

  // const tableData = [
  //   {
  //     key: "1",
  //     name: "Arfiur Rahman",
  //     age: 20,
  //   },
  //   {
  //     key: "2",
  //     name: "Rakib ",
  //     age: 22,
  //   },
  // ];

  // console.log(tableData);
  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page: ", page, "PageSize:", pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // setSortBy(field as string);
    // setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const onChange: TableProps<TTbaleData>["onChange"] = (pagination, filters, sorter, extra) => {
    console.log(filters);
  };

  // const resetFilters = () => {
  //   setSortBy("");
  //   setSortOrder("");
  //   setSearchTerm("");
  // };

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
          {/* {(!!sortBy || !sortOrder || !!searchTearm) && (
            <Button type="primary" onClick={resetFilters}>
              {" "}
              <ReloadOutlined />
            </Button>
          )} */}
        </div>
      </Actionbar>
      {/* <DCTable
        //
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        pageSize={3}
        totalPages={2}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
        onChange={onChange}
      /> */}

      <Table columns={columns} dataSource={tableData} onChange={onChange} />
    </div>
  );
};

export default Adminpage;
