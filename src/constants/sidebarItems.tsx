import { UserOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined />,
      children: [
        {
          label: <Link href={`${role}`}>Account Profile</Link>,
          key: `${role}/profile`,
        },
        {
          label: <Link href={`${role}/change-password`}>Change Password</Link>,
          key: `${role}/change-password`,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`${role}/manage-champing`}>Manage Champing</Link>,
      key: "manage-champing",
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: "User Management",
      key: "user-management",
      children: [
        {
          label: <Link href={`${role}/admin/create`}>Create Admin</Link>,
          key: `${role}/profile`,
        },
      ],
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: "User Management",
      key: "user-management",
      children: [
        {
          label: <Link href={`${role}/profile`}>Account Profile</Link>,
          key: `${role}/profile`,
        },
      ],
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Manage test",
      key: "manage-test",
      children: [
        {
          label: <Link href={`${role}/profile`}>Account Profile</Link>,
          key: `${role}/profile`,
        },
      ],
    },
  ];
  if (role === USER_ROLE.USER) return userSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
