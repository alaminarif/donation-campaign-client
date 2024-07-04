import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Link from "next/link";

// type TItems = {
//   label: string;
//   link: string;
// }[];
const DCBreadcrumb = ({
  items,
}: {
  items: {
    label: string;
    link: string;
  }[];
}) => {
  const breadcrumbItems = [
    {
      title: (
        <Link href="/">
          <HomeOutlined />
        </Link>
      ),
    },
    ...items.map((item) => {
      return {
        titile: item.link ? <Link href={item.link}>{item.label}</Link> : <span> {item.label}</span>,
      };
    }),
  ];
  return <Breadcrumb items={breadcrumbItems}></Breadcrumb>;
};

export default DCBreadcrumb;
