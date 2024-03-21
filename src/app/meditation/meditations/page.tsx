"use client";
import HeaderBar from "@/app/_components/HeaderBar";
import TopMenu from "@/app/_components/TopMenu";
import { Input, Dropdown, Button, MenuProps, Card } from "antd";
const { Meta } = Card;
import AddButton from "@/app/_components/AddButton";
import {
  SearchOutlined,
  FilterOutlined,
  DownOutlined,
} from "@ant-design/icons";
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
const header_items = [
  {
    key: "meditations",
    label: "Meditations",
  },
  {
    key: "plans",
    label: "Plans",
  },
];
export default function page() {
  return (
    <div>
      <HeaderBar title="MEDITATION" />
      <TopMenu header_items={header_items} defaultKey="meditations" />
      <div className="flex justify-between m-5">
        <div className="flex w-96 gap-5">
          <Input placeholder="Search" prefix={<SearchOutlined />} />
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
          <AddButton
            btnText="+ New Exercise"
            toRoute="meditations/add-meditation"
          />
        </div>
      </div>
      <div className="p-5 grid grid-cols-5">
        <div className="col-span-1 p-1">
          <Card
            hoverable
            style={{ width: "fit" }}
            cover={<img alt="example" src="/images/meditation.png" />}
          >
            <Meta title="Happy Hills" description="20 min + Guided" />
          </Card>
        </div>
        <div className="col-span-1 p-1">
          <Card
            hoverable
            style={{ width: "fit" }}
            cover={<img alt="example" src="/images/meditation.png" />}
          >
            <Meta title="Happy Hills" description="20 min + Guided" />
          </Card>
        </div>
        <div className="col-span-1 p-1">
          <Card
            hoverable
            style={{ width: "fit" }}
            cover={<img alt="example" src="/images/meditation.png" />}
          >
            <Meta title="Happy Hills" description="20 min + Guided" />
          </Card>
        </div>
        <div className="col-span-1 p-1">
          <Card
            hoverable
            style={{ width: "fit" }}
            cover={<img alt="example" src="/images/meditation.png" />}
          >
            <Meta title="Happy Hills" description="20 min + Guided" />
          </Card>
        </div>
        <div className="col-span-1 p-1">
          <Card
            hoverable
            style={{ width: "fit" }}
            cover={<img alt="example" src="/images/meditation.png" />}
          >
            <Meta title="Happy Hills" description="20 min + Guided" />
          </Card>
        </div>
        <div className="col-span-1 p-1">
          <Card
            hoverable
            style={{ width: "fit" }}
            cover={<img alt="example" src="/images/meditation.png" />}
          >
            <Meta title="Happy Hills" description="20 min + Guided" />
          </Card>
        </div>
        <div className="col-span-1 p-1">
          <Card
            hoverable
            style={{ width: "fit" }}
            cover={<img alt="example" src="/images/meditation.png" />}
          >
            <Meta title="Happy Hills" description="20 min + Guided" />
          </Card>
        </div>
      </div>
    </div>
  );
}
