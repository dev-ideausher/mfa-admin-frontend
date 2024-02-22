"use client";
import { MenuProps, Dropdown } from "antd";
import { SettingFilled } from "@ant-design/icons";
import { RiLogoutBoxFill } from "react-icons/ri";

import Image from "next/image";
import Link from "next/link";
const UserTab = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link href="/">
          <SettingFilled />
          <span className="ml-1 ">Settings</span>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link href="/" className="flex items-center">
          <span className=" text-red-700">
            <RiLogoutBoxFill />
          </span>
          <span className="ml-1 ">Logout</span>
        </Link>
      ),
    },
  ];
  return (
    <div
      style={{
        background: "#333333",
        display: "flex",
        justifyContent: "space-between",
        padding: "0.5rem",
        alignItems: "center",
        borderRadius: "5px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <Image src="/images/avatar.png" alt="user-img" width={30} height={30} />
        <p className="text-white">Dimitris</p>
      </div>

      <Dropdown menu={{ items }} placement="topLeft">
        <p style={{ color: "white", cursor: "pointer" }}>•••</p>
      </Dropdown>
    </div>
  );
};

export default UserTab;
