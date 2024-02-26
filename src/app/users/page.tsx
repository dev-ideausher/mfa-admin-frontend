import AppLayout from "@/layouts/AppLayout";
import type { MenuProps } from "antd";
import { Input, Dropdown, Button, Space, Table } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  DownOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import HeaderBar from "../_components/HeaderBar";
import TableUser from "../_components/TableUser";

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
  },
];
const datasource = [
  {
    key: 1,
    userid: 23,
    user: <TableUser />,
    type: "Individual",
    date_joined: "31 March 2024",
    followers: 12,
    following: 34,
    posts: 2,
    status: "Active",
  },
  {
    key: 1,
    userid: 23,
    user: <TableUser />,
    type: "Individual",
    date_joined: "31 March 2024",
    followers: 12,
    following: 34,
    posts: 2,
    status: "Active",
  },
  {
    key: 1,
    userid: 23,
    user: <TableUser />,
    type: "Individual",
    date_joined: "31 March 2024",
    followers: 12,
    following: 34,
    posts: 2,
    status: "Suspended",
  },
  {
    key: 1,
    userid: 23,
    user: <TableUser />,
    type: "Individual",
    date_joined: "31 March 2024",
    followers: 12,
    following: 34,
    posts: 2,
    status: "Active",
  },
  {
    key: 1,
    userid: 23,
    user: <TableUser />,
    type: "Individual",
    date_joined: "31 March 2024",
    followers: 12,
    following: 34,
    posts: 2,
    status: "Suspended",
  },
];

export default function page() {
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
    <AppLayout>
      <HeaderBar header_items={header_items} default={header_items[0]} />
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
    </AppLayout>
  );
}
