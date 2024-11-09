"use client";
import { Table } from "antd";

type TDCTableProps = {
  loading?: boolean;
  columns: any;
  dataSource: any;
  pageSize?: number;
  totalPages?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
  showPagination?: boolean;
};

const DCTable = ({
  loading = false,
  columns,
  dataSource,
  pageSize,
  totalPages,
  showSizeChanger = true,
  onPaginationChange,
  onTableChange,
  showPagination = true,
}: TDCTableProps) => {
  const paginationConfig = showPagination
    ? {
        pageSize: 5,
        total: 10,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: true,
        onChange: onPaginationChange,
      }
    : false;

  return (
    <Table
      //
      loading={false}
      columns={columns}
      dataSource={dataSource}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default DCTable;
