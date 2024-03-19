"use client";
import HeaderBar from "@/app/_components/HeaderBar";
import { useRouter } from "next/navigation";
import { Input, Dropdown, Button, Space, Table, Menu, Tag } from "antd";
import type { MenuProps } from "antd";
import PostTab from "../blog/_components/PostTab";
import {
  SearchOutlined,
  FilterOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { SlOptionsVertical } from "react-icons/sl";
import AddButton from "@/app/_components/AddButton";
import ContestTab from "./_components/ContestTab";

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
    title: "Contests",
    dataIndex: "contests",
    key: "contests",
    render: (text: string, row: any) => (
      <ContestTab title={text} postId={row.id} />
    ),
  },
  {
    title: "End date",
    dataIndex: "end_date",
    key: "end_date",
  },
  {
    title: "Winners",
    dataIndex: "winners",
    key: "winners",
    render: (status: string) =>
      status == "Announced" ? (
        <Tag color="green">● Announced</Tag>
      ) : (
        <Tag color="gray">● Unannounced</Tag>
      ),
  },
  {
    title: "Activity Status",
    dataIndex: "activity_status",
    key: "activity_status",
    render: (status: string) =>
      status == "Active" ? (
        <Tag color="green">● Active</Tag>
      ) : (
        <Tag color="red">● Expired</Tag>
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
    contests: "MFA Squat Challenge",
    end_date: "May 23, 2023",
    author: "MFA Group",
    winners: "Announced",
    activity_status: "Active",
  },
  {
    id: 2,
    contests: "MFA Squat Challenge",
    end_date: "May 23, 2023",
    author: "MFA Group",
    winners: "Unannounced",
    activity_status: "Active",
  },
  {
    id: 3,
    contests: "MFA Squat Challenge",
    end_date: "May 23, 2023",
    author: "MFA Group",
    winners: "Unannounced",
    activity_status: "Expired",
  },
];

const page = () => {
  return (
    <>
      <HeaderBar title="CONTESTS" />
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
          <AddButton btnText="+ New Contest" toRoute="/contests/add-contest" />
        </div>
      </div>
      <Table dataSource={data} columns={columns} />
    </>
  );
};

export default page;
