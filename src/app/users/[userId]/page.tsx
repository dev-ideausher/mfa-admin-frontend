import CommunityPosts from "./_components/CommunityPosts";
import SuspendBar from "./_components/SuspendBar";
import UserDiv from "./_components/UserDiv";
import { Menu } from "antd";

export default function SingleUSerPage({ params }: any) {
  const header_items = [
    {
      key: "community-posts",
      label: "Community Posts",
    },
    {
      key: "active-plans",
      label: "Active Plans",
    },
    {
      key: "contest",
      label: "Contests",
    },
  ];
  return (
    <div>
      <SuspendBar title="USER DETAILS" />
      <div className="m-5 grid grid-cols-12 gap-4">
        <div className="bg-white rounded-md col-span-4 p-4">
          <UserDiv />
        </div>
        <div className="bg-white rounded-md col-span-8 p-2">
          <Menu
            style={{ padding: 0 }}
            defaultSelectedKeys={["all-users"]}
            theme="light"
            mode="horizontal"
            items={header_items}
          />
          <CommunityPosts />
        </div>
      </div>
    </div>
  );
}
