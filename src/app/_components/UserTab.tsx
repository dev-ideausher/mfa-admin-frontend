"use client";
import { MenuProps, Dropdown } from "antd";
import Image from "next/image";
const UserTab = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
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
