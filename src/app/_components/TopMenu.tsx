"use client";
import { useRouter } from "next/navigation";
import { Menu } from "antd";
export default function TopMenu({ header_items, defaultKey }: any) {
  const router = useRouter();
  return (
    <Menu
      style={{ padding: 0 }}
      defaultSelectedKeys={[defaultKey]}
      theme="light"
      mode="horizontal"
      items={header_items}
      onClick={({ key }) => router.push(`${key}`)}
    />
  );
}
