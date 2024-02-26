"use client";
import { Menu } from "antd";
import { useRouter } from "next/navigation";
export default function HeaderBar(props: any) {
  const router = useRouter();
  return (
    <Menu
      style={{ padding: 0 }}
      defaultSelectedKeys={[`${props.default}`]}
      theme="light"
      mode="horizontal"
      items={props.header_items}
    />
  );
}
