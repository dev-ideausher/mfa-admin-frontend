import TopMenu from "@/app/_components/TopMenu";
import Post from "../../_components/Post";
import PostTopBar from "../../_components/PostTopBar";
import { Menu } from "antd";
const header_items = [
  {
    key: "comments",
    label: "Comments",
  },
  {
    key: "likes",
    label: "Likes",
  },
  {
    key: "reports",
    label: "Reports",
  },
];
export default function PostPage() {
  return (
    <div>
      <PostTopBar />
      <div className="p-5 grid grid-cols-2 gap-5">
        <div className="col-span-1 bg-white rounded-md p-5 border-[1px] border-gray-200">
          <Post />
        </div>
        <div className="col-span-1 bg-white rounded-md p-5 border-[1px] border-gray-200">
          <Menu
            style={{ padding: 0 }}
            defaultSelectedKeys={["comments"]}
            theme="light"
            mode="horizontal"
            items={header_items}
          />
        </div>
      </div>
    </div>
  );
}
