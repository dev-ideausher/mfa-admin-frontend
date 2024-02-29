"use client";
import HeaderBar from "@/app/_components/HeaderBar";
import { Menu, Button } from "antd";
import { useRouter } from "next/navigation";
import FeatureBox from "./_components/FeatureBox";
export default function Page() {
  const router = useRouter();
  const header_items = [
    {
      key: "partnership",
      label: "Partnership",
    },
    {
      key: "privacy-policy",
      label: "Privacy policy",
    },
    {
      key: "terms-conditions",
      label: "Terms and Conditions",
    },
  ];
  return (
    <div>
      <HeaderBar title="INFO MANAGEMENT" />
      <Menu
        style={{ padding: 0 }}
        defaultSelectedKeys={["partnership"]}
        theme="light"
        mode="horizontal"
        items={header_items}
        onClick={({ key }) => router.push(`${key}`)}
      />
      <div className="bg-white m-5 rounded shadow-md">
        <div className="flex p-5 justify-between">
          <div>
            <h1 className="text-xl">Partner</h1>
            <p className="text-gray-700">Last updated 12 Jan 2023</p>
          </div>
          <Button
            type="primary"
            danger
            style={{
              fontSize: "1rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => router.push("partnership/add")}
          >
            + Add
          </Button>
        </div>
        <hr />
        <div>Table here</div>
        <hr />
        <div className="p-5">
          <h1>FEATURES</h1>
          <div className="flex items-center justify-evenly">
            <FeatureBox />
            <FeatureBox />
            <FeatureBox />
          </div>
        </div>
      </div>
    </div>
  );
}
