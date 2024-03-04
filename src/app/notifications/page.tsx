"use client";
import HeaderBar from "../_components/HeaderBar";
import type { MenuProps } from "antd";
import { Input, Dropdown, Button, Space, Table, Menu } from "antd";
import Link from "next/link";
import {
  SearchOutlined,
  FilterOutlined,
  DownOutlined,
} from "@ant-design/icons";
import AddButton from "../_components/AddButton";

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
    title: "User",
    dataIndex: "user",
    key: "user",
    render: (user: any) => {
      return <Link href={`/notifications/${user}`}>{user}</Link>;
    },
  },
  {
    title: "Date sent",
    dataIndex: "datesent",
    key: "datesent",
    sorter: (a: any, b: any) => a.date - b.date,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "  ",
    dataIndex: "delete",
    key: "delete",
  },
];
const data = [
  {
    key: "1",
    user: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    datesent: "Feb 27, 2024, 23:57",
    type: "Registered",
    status: "Sent",
  },
  {
    key: "2",
    user: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    datesent: "Feb 27, 2024, 23:57",
    type: "Partners",
    status: "Sent",
  },
  {
    key: "3",
    user: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    datesent: "Feb 27, 2024, 23:57",
    type: "Registered",
    status: "Scheduled",
  },
  {
    key: "4",
    user: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    datesent: "Feb 27, 2024, 23:57",
    type: "Registered",
    status: "Scheduled",
  },
  {
    key: "5",
    user: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    datesent: "Feb 27, 2024, 23:57",
    type: "Registered",
    status: "Scheduled",
  },
  {
    key: "6",
    user: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    datesent: "Feb 27, 2024, 23:57",
    type: "Registered",
    status: "Scheduled",
  },
  {
    key: "7",
    user: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    datesent: "Feb 27, 2024, 23:57",
    type: "Registered",
    status: "Scheduled",
  },
  {
    key: "8",
    user: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    datesent: "Feb 27, 2024, 23:57",
    type: "Registered",
    status: "Scheduled",
  },
  {
    key: "9",
    user: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    datesent: "Feb 27, 2024, 23:57",
    type: "Registered",
    status: "Scheduled",
  },
  {
    key: "10",
    user: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    datesent: "Feb 27, 2024, 23:57",
    type: "Registered",
    status: "Scheduled",
  },
  {
    key: "11",
    user: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    datesent: "Feb 27, 2024, 23:57",
    type: "Registered",
    status: "Scheduled",
  },
  {
    key: "13",
    user: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    datesent: "Feb 27, 2024, 23:57",
    type: "Registered",
    status: "Scheduled",
  },
  {
    key: "14",
    user: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    datesent: "Feb 27, 2024, 23:57",
    type: "Registered",
    status: "Scheduled",
  },
  {
    key: "15",
    user: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    datesent: "Feb 27, 2024, 23:57",
    type: "Registered",
    status: "Scheduled",
  },
];

const Page = () => {
  return (
    <div>
      <HeaderBar title="NOTIFICATIONS" />
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
          <AddButton btnText="+ New Notification" toRoute="notifications/add" />
        </div>
      </div>
      <Table style={{ margin: 20 }} columns={columns} dataSource={data} />
    </div>
  );
};

export default Page;
