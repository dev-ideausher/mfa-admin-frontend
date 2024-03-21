"use client";
import Post from "../../_components/Post";
import PostTopBar from "../../_components/PostTopBar";
import { useState } from "react";
import { Menu } from "antd";
import CommentDiv from "./_components/CommentDiv";
import LikesDiv from "./_components/LikesDiv";
import ReportsDiv from "./_components/ReportsDiv";
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
  const [renderDiv, setRenderDiv] = useState("comments");
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
            defaultSelectedKeys={[`${renderDiv}`]}
            theme="light"
            mode="horizontal"
            items={header_items}
            onClick={({ key }) => setRenderDiv(key)}
          />
          {renderDiv === "comments" && <CommentDiv />}
          {renderDiv === "likes" && <LikesDiv />}
          {renderDiv === "reports" && <ReportsDiv />}
        </div>
      </div>
    </div>
  );
}
