"use client";
import HeaderBar from "@/app/_components/HeaderBar";
import { Menu } from "antd";
import { useRouter } from "next/navigation";
const header_items = [
  {
    key: "posts",
    label: "Posts",
  },
  {
    key: "drafts",
    label: "Drafts",
  },
];
export default function DraftsPage() {
  const router = useRouter();
  return (
    <div>
      <HeaderBar title="BLOG" />
      <Menu
        style={{ padding: 0 }}
        defaultSelectedKeys={["drafts"]}
        theme="light"
        mode="horizontal"
        items={header_items}
        onClick={({ key }) => router.push(`${key}`)}
      />
    </div>
  );
}
