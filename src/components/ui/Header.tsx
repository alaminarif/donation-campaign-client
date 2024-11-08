import { authKey } from "@/components/shared/constants/storageKey";
import { Avatar, Button, Col, Dropdown, Layout, Row, Space } from "antd";
import { useRouter } from "next/navigation";
import { UserOutlined } from "@ant-design/icons";
const { Header: AntHeader } = Layout;

import type { MenuProps } from "antd";
import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const { role } = getUserInfo() as any;
  const logOut = () => {
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: 0,
      label: <Link href={"/profile"}>Profile</Link>,
    },
    {
      key: 1,
      label: (
        <Button onClick={logOut} type="text" danger>
          LogOut
        </Button>
      ),
    },
  ];
  return (
    <AntHeader
      style={{
        background: "#fff",
      }}
    >
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        <p style={{ marginRight: "10px" }}>{role}</p>
        <Dropdown menu={{ items }}>
          <Space wrap size={16}>
            <Avatar size="small" icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
