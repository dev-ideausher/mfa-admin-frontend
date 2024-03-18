"use client";
import HeaderBar from "@/app/_components/HeaderBar";
import TopMenu from "@/app/_components/TopMenu";
import { Input, Dropdown, Button, MenuProps, Table } from "antd";
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
    key: "ingredients",
    label: "Ingredients",
  },
  {
    key: "recipes",
    label: "Recipes",
  },
  {
    key: "plans",
    label: "Plans",
  },
];
const columns = [
  {
    title: "Ingredients",
    dataIndex: "ingredients",
    key: "ingredients",
    sorter: (a: any, b: any) => a.date - b.date,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Measurment",
    dataIndex: "measurment",
    key: "measurment",
  },
  {
    title: "Calories",
    dataIndex: "calories",
    key: "calories",
  },
];
const data = [
  {
    key: "1",
    ingredients: "Water",
    type: "Vegetarian",
    calories: "0 kcal",
    measurment: "Cups",
  },
  {
    key: "1",
    ingredients: "Water",
    type: "Vegetarian",
    calories: "0 kcal",
    measurment: "Cups",
  },
  {
    key: "1",
    ingredients: "Water",
    type: "Vegetarian",
    calories: "0 kcal",
    measurment: "Cups",
  },
  {
    key: "1",
    ingredients: "Water",
    type: "Vegetarian",
    calories: "0 kcal",
    measurment: "Cups",
  },
  {
    key: "1",
    ingredients: "Water",
    type: "Vegetarian",
    calories: "0 kcal",
    measurment: "Cups",
  },
  {
    key: "1",
    ingredients: "Water",
    type: "Vegetarian",
    calories: "0 kcal",
    measurment: "Cups",
  },
  {
    key: "1",
    ingredients: "Water",
    type: "Vegetarian",
    calories: "0 kcal",
    measurment: "Cups",
  },
  {
    key: "1",
    ingredients: "Water",
    type: "Vegetarian",
    calories: "0 kcal",
    measurment: "Cups",
  },
  {
    key: "1",
    ingredients: "Water",
    type: "Vegetarian",
    calories: "0 kcal",
    measurment: "Cups",
  },
];
export default function page() {
  return (
    <div>
      <HeaderBar title="NUTRITION" />
      <TopMenu header_items={header_items} defaultKey="ingredients" />
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
          <AddButton btnText="+ New Ingredient" toRoute="ingredients/add" />
        </div>
      </div>
      <Table style={{ margin: 20 }} columns={columns} dataSource={data} />
    </div>
  );
}
