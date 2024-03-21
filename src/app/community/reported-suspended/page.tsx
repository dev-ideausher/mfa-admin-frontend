"use client";
import HeaderBar from "@/app/_components/HeaderBar";
import TopMenu from "@/app/_components/TopMenu";
import type { MenuProps } from "antd";
import { Input, Dropdown, Button, Badge, Table, Menu, Tag } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  DownOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import PostTab from "../_components/PostTab";
import UserTab from "../_components/UserTab";
import { SlOptionsVertical } from "react-icons/sl";

const header_items = [
  {
    key: "all-posts",
    label: "All Posts",
  },
  {
    key: "reported-suspended",
    label: "Reported & Suspended",
  },
];
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
const data = [
  {
    key: "1",
    post: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    user: "Dana White",
    date_created: "21 Jan 2024",
    likes: 7,
    comments: 3,
    status: "Suspended",
    reports: 21,
  },
  {
    key: "2",
    post: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    user: "Dana White",
    date_created: "21 Jan 2024",
    likes: 7,
    comments: 3,
    status: "Suspended",
    reports: 11,
  },
  {
    key: "3",
    post: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    user: "Dana White",
    date_created: "21 Jan 2024",
    likes: 7,
    status: "Suspended",
    reports: 1,
  },
];
const columns = [
  {
    title: "Post",
    dataIndex: "post",
    key: "post",
    render: (text: string, row: any) => <PostTab text={text} postId={row.id} />,
  },
  {
    title: "User",
    dataIndex: "user",
    key: "user",
    render: (text: string) => <UserTab text={text} />,
  },
  {
    title: "Date created",
    dataIndex: "date_created",
    key: "date_created",
  },
  {
    title: "Likes",
    dataIndex: "likes",
    key: "likes",
  },
  {
    title: "Comments",
    dataIndex: "comments",
    key: "comments",
  },
  {
    title: "Reports",
    dataIndex: "reports",
    key: "reports",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) =>
      status === "Active" ? (
        <Tag color="green">● Active</Tag>
      ) : (
        <Tag color="red">● Suspended</Tag>
      ),
  },
  {
    title: "Actions",
    key: "actions",
    render: (text: any, row: any) => (
      <Dropdown
        menu={{
          items: [
            {
              key: "suspend",
              label: (
                <Button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "green",
                  }}
                  type="text"
                  onClick={() => console.log(row.id)}
                >
                  <CheckOutlined /> Revoke suspension
                </Button>
              ),
            },
          ],
        }}
      >
        <Button style={{ border: 0 }}>
          <SlOptionsVertical />
        </Button>
      </Dropdown>
    ),
  },
];
const page = () => {
  return (
    <div>
      <HeaderBar title="COMMUNITY" />
      <TopMenu header_items={header_items} defaultKey="reported-suspended" />
      <div className="flex justify-between m-5">
        <div className="flex w-96 gap-5">
          <Input placeholder="Search by Blog" prefix={<SearchOutlined />} />
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
        </div>
      </div>
      <div className="m-5">
        <Table dataSource={data} columns={columns} />
      </div>
    </div>
  );
};

export default page;
