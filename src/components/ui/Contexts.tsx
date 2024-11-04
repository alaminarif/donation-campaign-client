"use client";
import { Layout } from "antd";
import Header from "./Header";
const { Content } = Layout;

const Contexts = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
      }}
    >
      <Header />

      {children}
    </Content>
  );
};

export default Contexts;
