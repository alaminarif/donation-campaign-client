import { authKey } from "@/constants/storageKey";
import { Avatar, Button, Dropdown, Layout, Row, Space } from "antd";
import { useRouter } from "next/navigation";
import { UserOutlined } from "@ant-design/icons";
const { Header: AntHeader } = Layout;

import type { MenuProps } from "antd";
import { removeUserInfo } from "@/services/auth.service";

const Header = () => {
  const router = useRouter();
  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: 0,
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
