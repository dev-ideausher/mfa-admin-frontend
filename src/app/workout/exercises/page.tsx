"use client";
import HeaderBar from "@/app/_components/HeaderBar";
import TopMenu from "@/app/_components/TopMenu";
import { Input, Dropdown, Button, MenuProps, Row, Col, Card } from "antd";
import { useRouter } from "next/navigation";
import AddButton from "@/app/_components/AddButton";
import {
  SearchOutlined,
  FilterOutlined,
  DownOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import ImgCard from "@/app/_components/ImgCard";

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

export default function ExercisesPage() {
  const router = useRouter();
  const { Meta } = Card;
  const header_items = [
    {
      key: "exercises",
      label: "Exercises",
    },
    {
      key: "workouts",
      label: "Workouts",
    },
    {
      key: "plans",
      label: "Plans",
    },
  ];
  return (
    <div>
      <HeaderBar title="WORKOUT" />
      <TopMenu header_items={header_items} defaultKey="exercises" />
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
          <AddButton btnText="+ New Exercise" toRoute="exercises/add" />
        </div>
      </div>
      <Row gutter={16} style={{ margin: 15 }}>
        <Col
          className="gutter-row"
          span={6}
          onClick={() => router.push("exercises/234")}
        >
          <ImgCard />
        </Col>
        <Col className="gutter-row" span={6}>
          <ImgCard />
        </Col>
        <Col className="gutter-row" span={6}>
          <ImgCard />
        </Col>
        <Col className="gutter-row" span={6}>
          <ImgCard />
        </Col>
        <Col className="gutter-row" span={6}>
          <ImgCard />
        </Col>
        <Col className="gutter-row" span={6}>
          <ImgCard />
        </Col>
        <Col className="gutter-row" span={6}>
          <ImgCard />
        </Col>
      </Row>
    </div>
  );
}
