"use client";
import type { MenuProps } from "antd";
import { Input, Dropdown, Button, Badge, Table, Menu } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  DownOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import HeaderBar from "../_components/HeaderBar";
import TableUser from "./_components/TableUser";
import { useRouter } from "next/navigation";

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
    title: "User ID",
    dataIndex: "userid",
    key: "userid",
  },
  {
    title: "User",
    dataIndex: "user",
    key: "user",
    render: (text: string, row: any) => (
      //@ts-ignore
      <TableUser user={row} />
    ),
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Date joined",
    dataIndex: "date_joined",
    key: "date_joined",
  },
  {
    title: "Followers",
    dataIndex: "followers",
    key: "followers",
  },
  {
    title: "Following",
    dataIndex: "following",
    key: "following",
  },
  {
    title: "Posts",
    dataIndex: "posts",
    key: "posts",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      return status === "Active" ? (
        <Badge
          style={{
            backgroundColor: "#E8FCF4",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            borderRadius: "0.5rem",
          }}
          color="#10935A"
          text="Active"
        />
      ) : (
        <Badge
          style={{
            backgroundColor: "#FFF0F0",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            borderRadius: "0.5rem",
          }}
          color="#D6052F"
          text="Suspended"
        />
      );
    },
  },
];
const datasource = [
  {
    key: 1,
    userid: 23,
    username: "John Travolta",
    phno: "+1 53268 23425",
    type: "Individual",
    date_joined: "31 March 2024",
    followers: 12,
    following: 34,
    posts: 2,
    status: "Active",
  },
];

export default function Page() {
  const router = useRouter();
  const header_items = [
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
    <>
      <HeaderBar title="USERS" />
      <Menu
        style={{ padding: 0 }}
        defaultSelectedKeys={["all-users"]}
        theme="light"
        mode="horizontal"
        items={header_items}
        onClick={({ key }) =>
          router.push(key !== "all-users" ? `users/${key}` : "users")
        }
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
        </div>
      </div>
      <div className="m-5">
        <Table columns={columns} dataSource={datasource} />
      </div>
    </>
  );
}
