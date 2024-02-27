"use client";
import HeaderBar from "@/app/_components/HeaderBar";
import { Menu } from "antd";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  const header_items = [
    {
      key: "partnership",
      label: "Partnership",
    },
    {
      key: "privacy-policy",
      label: "Privacy policy",
    },
    {
      key: "terms-conditions",
      label: "Terms and Conditions",
    },
  ];
  return (
    <div>
      <HeaderBar title="INFO MANAGEMENT" />
      <Menu
        style={{ padding: 0 }}
        defaultSelectedKeys={["privacy-policy"]}
        theme="light"
        mode="horizontal"
        items={header_items}
        onClick={({ key }) => router.push(`${key}`)}
      />
      <h1>Privacy policy</h1>
    </div>
  );
}
