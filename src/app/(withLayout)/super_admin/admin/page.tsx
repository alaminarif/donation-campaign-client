"use client";
import Actionbar from "@/components/ui/Actionbar";
import DCBreadcrumb from "@/components/ui/DCBreadcrumb";
import DCTable from "@/components/ui/DCTable";
import { useGetAllAdminsQuery } from "@/redux/api/adminApi";
import { TQueryParam } from "@/types";
import { Button } from "antd";
import Link from "next/link";
import React, { useState } from "react";

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

  //ts-ignore
  const admins = adminData?.data;
  const meta = adminData?.meta;

  console.log({ isLoading, isFetching });
  if (isLoading) {
    return <p>loading...</p>;
  }
  console.log(admins);
  console.log(meta);

  const columns = [
    {
      title: "Id",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Action",

      render: function (data: any) {
        return (
          <Button onClick={() => console.log(data)} type="primary" danger>
            X
          </Button>
        );
      },
    },
  ];

  const tableData = [
    {
      key: "1",
      name: "Arfiur Rahman",
      age: 20,
    },
    {
      key: "2",
      name: "Rakib ",
      age: 22,
    },
  ];

  console.log(tableData);
  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page: ", page, "PageSize:", pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // setSortBy(field as string);
    // setSortOrder(order === "ascend" ? "asc" : "desc");
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
        <Link href="/super_admin/admin/create">
          <Button type="primary">Create Admin</Button>
        </Link>
      </Actionbar>
      <DCTable
        //
        loading={false}
        columns={columns}
        dataSource={admins}
        pageSize={3}
        totalPages={2}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default Adminpage;
