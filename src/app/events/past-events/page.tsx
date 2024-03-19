"use client";
import TopMenu from "@/app/_components/TopMenu";
import type { MenuProps } from "antd";
import { Input, Dropdown, Button, Badge, Table, Menu, Tag } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  DownOutlined,
} from "@ant-design/icons";
import AddButton from "@/app/_components/AddButton";
import PostTab from "../_components/PostTab";
import UserTab from "../_components/UserTab";
import HeaderBar from "@/app/_components/HeaderBar";
import { SlOptionsVertical } from "react-icons/sl";
const header_items = [
  {
    key: "all-events",
    label: "All Events",
  },
  {
    key: "past-events",
    label: "Past Events",
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
    id: "1",
    post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    host: "Henry Fiat",
    date_created: "Feb 27, 2024 21:00-22:00",
    type: "Virtual",
    status: "Cancelled",
  },
  {
    id: "2",
    post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    host: "Henry Fiat",
    date_created: "Feb 27, 2024 21:00-22:00",
    type: "Virtual",
    status: "Expired",
  },
  {
    id: "3",
    post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    host: "Henry Fiat",
    date_created: "Feb 27, 2024 21:00-22:00",
    type: "Virtual",
    status: "Expired",
  },
  {
    id: "4",
    post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    host: "Henry Fiat",
    date_created: "Feb 27, 2024 21:00-22:00",
    type: "Virtual",
    status: "Expired",
  },
  {
    id: "5",
    post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    host: "Henry Fiat",
    date_created: "Feb 27, 2024 21:00-22:00",
    type: "Virtual",
    status: "Cancelled",
  },
  {
    id: "6",
    post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    host: "Henry Fiat",
    date_created: "Feb 27, 2024 21:00-22:00",
    type: "Virtual",
    status: "Expired",
  },
];
const columns = [
  {
    title: "Post",
    dataIndex: "post",
    key: "post",
    render: (text: string, row: any) => <PostTab title={text} row={row} />,
  },
  {
    title: "Host",
    dataIndex: "host",
    key: "host",
    render: (text: string, row: any) => <UserTab title={text} />,
  },
  {
    title: "Date created",
    dataIndex: "date_created",
    key: "date_created",
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
    render: (text: string) => {
      switch (text) {
        case "Ongoing":
          return (
            <Tag bordered={false} color="#013220">
              <span className="text-green-500">●</span> Ongoing
            </Tag>
          );
        case "Upcoming":
          return (
            <Tag bordered={false} color="green">
              ● Upcoming
            </Tag>
          );
        case "Cancelled":
          return (
            <Tag bordered={false} color="red">
              ● Cancelled
            </Tag>
          );
        case "Expired":
          return (
            <Tag bordered={false} color="gray">
              ● Expired
            </Tag>
          );
        default:
          return null;
      }
    },
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
const page = () => {
  return (
    <div>
      <HeaderBar title="EVENTS" />
      <TopMenu header_items={header_items} defaultKey="past-events" />

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
          <AddButton btnText="+ New Event" toRoute="/events/add-event" />
        </div>
      </div>
      <div className="m-5">
        <Table dataSource={data} columns={columns} />
      </div>
    </div>
  );
};

export default page;
