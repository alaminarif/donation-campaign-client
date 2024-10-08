"use client";
import { Layout, Menu } from "antd";
import { useState } from "react";
const { Sider } = Layout;
import logo from "@/assets/Logo.png";

import { sidebarItems } from "@/constants/sidebarItems";
import { USER_ROLE } from "@/constants/role";
import { getUserInfo } from "@/services/auth.service";
import Image from "next/image";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const role = USER_ROLE.ADMIN;

  const { role } = getUserInfo() as any;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "40px 0 10px 0px",
        }}
      >
        <Image src={logo} width={80} alt="log" />
      </div>
      <div />
      <Menu theme="dark" style={{ color: "red" }} defaultSelectedKeys={["1"]} mode="inline" items={sidebarItems(role)} />
    </Sider>
  );
};

export default Sidebar;
