"use client";
import HeaderBar from "@/app/_components/HeaderBar";
import { useRouter } from "next/navigation";
import { Input, Dropdown, Button, Space, Table, Menu } from "antd";
import type { MenuProps } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  DownOutlined,
} from "@ant-design/icons";
import AddButton from "@/app/_components/AddButton";
import PostTab from "../_components/PostTab";

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
const columns = [
  {
    title: "Priority",
    dataIndex: "priority",
    key: "priority",
  },
  {
    title: "Post",
    dataIndex: "post",
    key: "post",
  },
  {
    title: "Date created",
    dataIndex: "date_created",
    key: "date_created",
  },
  {
    title: "Views",
    dataIndex: "views",
    key: "views",
  },
  {
    title: "Activity Status",
    dataIndex: "activity_status",
    key: "activity_status",
  },
];
const data = [
  {
    priority: 1,
    post: <PostTab />,
    date_created: "May 23, 2023",
    views: 12,
    activity_status: "Active",
  },
  {
    priority: 1,
    post: <PostTab />,
    date_created: "May 23, 2023",
    views: 12,
    activity_status: "Active",
  },
  {
    priority: 1,
    post: <PostTab />,
    date_created: "May 23, 2023",
    views: 12,
    activity_status: "Active",
  },
  {
    priority: 1,
    post: <PostTab />,
    date_created: "May 23, 2023",
    views: 12,
    activity_status: "Active",
  },
];
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
export default function PostsPage() {
  const router = useRouter();
  return (
    <>
      <HeaderBar title="BLOG" />
      <Menu
        style={{ padding: 0 }}
        defaultSelectedKeys={["posts"]}
        theme="light"
        mode="horizontal"
        items={header_items}
        onClick={({ key }) => router.push(`${key}`)}
      />
      <div className="flex justify-between m-5">
        <div className="flex w-96 gap-5">
          <Input
            placeholder="Search by username or ID"
            prefix={<SearchOutlined />}
          />
          <Dropdown menu={{ items }} placement="bottom">
            <Button style={{ display: "flex", alignItems: "center" }}>
              <FilterOutlined />
              Filters
            </Button>
          </Dropdown>
        </div>
        <div className="flex items-center gap-3">
          <p>Range</p>
          <Dropdown menu={{ items }} placement="bottom">
            <Button style={{ display: "flex", alignItems: "center" }}>
              Last week
              <DownOutlined />
            </Button>
          </Dropdown>
          <AddButton btnText="+ New Post" toRoute="/blog/add-blog" />
        </div>
      </div>
      <div>
        <Table dataSource={data} columns={columns} />
      </div>
    </>
  );
}
