"use client";
import HeaderBar from "@/app/_components/HeaderBar";
import { useRouter } from "next/navigation";
import { Input, Dropdown, Button, Space, Table, Menu, Tag } from "antd";
import type { MenuProps } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { SlOptionsVertical } from "react-icons/sl";
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
    render: (text: string, row: any) => (
      <PostTab title={text} postId={row.id} />
    ),
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
    render: (status: string) =>
      status == "Active" ? (
        <Tag color="green">● Active</Tag>
      ) : (
        <Tag color="red">● Inactive</Tag>
      ),
  },
  {
    title: "Actions",
    key: "actions",
    render: (text: any, record: any) => (
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key="1">
              <Button type="link" onClick={() => console.log(record.key)}>
                Update
              </Button>
            </Menu.Item>
            <Menu.Item key="2">
              <Button type="link" onClick={() => console.log(record.key)}>
                Delete
              </Button>
            </Menu.Item>
          </Menu>
        }
        trigger={["click"]}
      >
        <Button style={{ border: 0 }}>
          <SlOptionsVertical />
        </Button>
      </Dropdown>
    ),
  },
];
const data = [
  {
    id: 1,
    priority: 1,
    post: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos odit.",
    date_created: "May 23, 2023",
    views: 12,
    activity_status: "Active",
  },
  {
    id: 2,
    priority: 1,
    post: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos odit.",
    date_created: "May 23, 2023",
    views: 12,
    activity_status: "Inactive",
  },
  {
    id: 3,
    priority: 1,
    post: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos odit.",
    date_created: "May 23, 2023",
    views: 12,
    activity_status: "Active",
  },
  {
    id: 4,
    priority: 1,
    post: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos odit.",
    date_created: "May 23, 2023",
    views: 12,
    activity_status: "Inactive",
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
export default function DraftsPage() {
  const router = useRouter();
  return (
    <>
      <HeaderBar title="BLOG" />
      <Menu
        style={{ padding: 0 }}
        defaultSelectedKeys={["drafts"]}
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
      <div className="mx-5">
        <Table dataSource={data} columns={columns} />
      </div>
    </>
  );
}
