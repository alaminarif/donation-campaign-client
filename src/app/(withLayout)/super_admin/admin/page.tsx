import Actionbar from "@/components/ui/Actionbar";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const Adminpage = () => {
  return (
    <Actionbar title="Admin List">
      <Link href="/super_admin/admin/create">
        <Button type="primary">Create Admin</Button>
      </Link>
    </Actionbar>
  );
};

export default Adminpage;
