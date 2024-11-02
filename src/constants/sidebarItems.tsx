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

    {
      label: <Link href={`${role}/manage-donation`}>Manage Champing</Link>,
      key: "manage-donation",
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
          label: <Link href={`${role}/admin`}>Mange Admin</Link>,
          key: `${role}/admin`,
        },
        {
          label: <Link href={`${role}/manager`}>Mange Manger</Link>,
          key: `${role}/manager`,
        },
        {
          label: <Link href={`${role}/volunteer`}>Mange Volunteer</Link>,
          key: `${role}/volunteer`,
        },
        {
          label: <Link href={`${role}/donor`}>Mange Donor</Link>,
          key: `${role}/donor`,
        },
        {
          label: <Link href={`${role}/guest`}>Mange Guest</Link>,
          key: `${role}/guest`,
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
          label: <Link href={`${role}/manager`}>Mange Manger</Link>,
          key: `${role}/manager`,
        },
        {
          label: <Link href={`${role}/volunteer`}>Mange Volunteer</Link>,
          key: `${role}/volunteer`,
        },
        {
          label: <Link href={`${role}/donor`}>Mange Donor</Link>,
          key: `${role}/donor`,
        },
        {
          label: <Link href={`${role}/guest`}>Mange Guest</Link>,
          key: `${role}/guest`,
        },
      ],
    },
  ];

  const managerSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: "User Management",
      key: "user-management",
    },
  ];

  const volunteerSidebarItems: MenuProps["items"] = [...defaultSidebarItems];
  const donorSidebarItems: MenuProps["items"] = [...defaultSidebarItems];
  const guestSidebarItems: MenuProps["items"] = [...defaultSidebarItems];

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

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.MANAGER) return managerSidebarItems;
  else if (role === USER_ROLE.VOLUNTEER) return volunteerSidebarItems;
  else if (role === USER_ROLE.DONOR) return donorSidebarItems;
  else if (role === USER_ROLE.GUEST) return guestSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
