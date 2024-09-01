"use client";
import { Layout } from "antd";
import DCBreadcrumb from "./DCBreadcrumb";
import Header from "./Header";
const { Content } = Layout;

const Contexts = ({ children }: { children: React.ReactNode }) => {
  const base = "super_admin";
  return (
    <Content
      style={{
        minHeight: "100vh",
      }}
    >
      <Header />
      <DCBreadcrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: `admin`,
            link: `/${base}/super_admin`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contexts;
