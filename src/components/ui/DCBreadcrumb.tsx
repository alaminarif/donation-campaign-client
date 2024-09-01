import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Link from "next/link";

type TItems = {
  label: string;
  link: string;
}[];

const DCBreadcrumb = ({ items }: { items: TItems }) => {
  const breadCrumbItems = [
    {
      title: (
        <Link href="/">
          <HomeOutlined />
        </Link>
      ),
    },
    ...items.map((item) => {
      return {
        title: item.link ? <Link href={item.link}>{item.label}</Link> : <span>{item.label}</span>,
      };
    }),
  ];

  return <Breadcrumb items={breadCrumbItems}></Breadcrumb>;
};

export default DCBreadcrumb;

//
