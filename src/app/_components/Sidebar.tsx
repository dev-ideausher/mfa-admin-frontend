import { Col, Menu, Row } from "antd";
import Image from "next/image";
import React from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HeartOutlined,
  BellOutlined,
  BarChartOutlined,
  UsergroupAddOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

import Link from "next/link";

const Sidebar = ({ heading }: { heading: string }) => {
  const icons = {
    Revenue: <BarChartOutlined />,
    Users: <UsergroupAddOutlined />,
  };
  const options = ["Revenue", "Users"];
  return (
    <>
      <div className="demo-logo-vertical" />
      <Image
        alt="afro reservations"
        src="/images/mfa-logo-white.png"
        width={140}
        height={85}
      />
      <Menu
        style={{
          border: "none",
          display: "flex",
          gap: 26,
          flexDirection: "column",
          alignItems: "center",
        }}
        mode="inline"
        defaultSelectedKeys={[`${options.indexOf(heading) + 1}`]}
        items={options.map((item, index) => {
          const isSelected = item.toLowerCase() === heading;
          return {
            key: String(index + 1),
            label: (
              <Link
                style={{
                  fontWeight: 500,
                }}
                href={`/${index == 0 ? "" : item.toLowerCase()}`}
              >
                <Row>
                  <Col className="place-middle" span={10}>
                    <div>{item}</div>
                  </Col>
                  <Col style={{ textAlign: "left" }} span={14}>
                    <span style={{ fontWeight: isSelected ? 500 : 400 }}>
                      {item}
                    </span>
                  </Col>
                </Row>
              </Link>
            ),
          };
        })}
      />
    </>
  );
};

export default Sidebar;
