"use client";
import { authKey } from "@/components/shared/constants/storageKey";
import { getUserInfo, isLoggedIn, removeUserInfo } from "@/services/auth.service";
import { Avatar, Button, Col, Dropdown, Layout, Menu, Row, Space } from "antd";
const { Header: AntHeader, Content } = Layout;
import type { MenuProps } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserOutlined } from "@ant-design/icons";

const LoggedIn = isLoggedIn();

const items2: MenuProps["items"] = [
  {
    key: "home",
    label: <Link href={"/"}> Home</Link>,
  },
  {
    key: "Campaigns",
    label: <Link href={"/campaigns"}> Campaigns </Link>,
  },
  {
    key: "about",
    label: <Link href={"/about"}> About US</Link>,
  },
  {
    key: "contact",
    label: <Link href={"/contact"}> Contact</Link>,
  },
];

const Navbar = () => {
  const router = useRouter();
  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: 0,
      label: LoggedIn ? (
        <>
          <Link href={"/profile"}>Profile</Link> <br />
          <Button type="text" onClick={logOut} danger>
            LogOut
          </Button>
        </>
      ) : (
        <Link href={"/login"}>Login</Link>
      ),
    },
  ];
  return (
    <Layout style={{ background: "#576556" }}>
      <AntHeader style={{ background: "#576556" }}>
        <Row
          justify="end"
          align="middle"
          style={{
            height: "100%",
            background: "",
          }}
        >
          <div
            style={{
              color: "white",
            }}
          >
            logo
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items2}
            style={{
              flex: 1,
              justifyContent: "center",
              minWidth: 0,
              color: "#ddd",
              background: "#576556",
            }}
          />

          <div
            style={{
              color: "white",
            }}
          >
            <Dropdown menu={{ items }}>
              <Space wrap size={16}>
                <Avatar size="small" icon={<UserOutlined />} />
              </Space>
            </Dropdown>
          </div>
        </Row>
      </AntHeader>
    </Layout>
  );
};
export default Navbar;

//  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} items={items} style={{ flex: 1, minWidth: 0 }} />;
