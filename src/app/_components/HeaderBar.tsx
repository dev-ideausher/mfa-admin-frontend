import { Menu } from "antd";
import { useRouter } from "next/navigation";
export default function HeaderBar() {
  const router = useRouter();
  const items = [
    {
      key: "all-users",
      label: "All Users",
    },
    {
      key: "suspended-users",
      label: "Suspended",
    },
  ];
  return (
    <Menu
      style={{ padding: 0 }}
      defaultSelectedKeys={["all-users"]}
      theme="light"
      mode="horizontal"
      items={items}
    />
  );
}
