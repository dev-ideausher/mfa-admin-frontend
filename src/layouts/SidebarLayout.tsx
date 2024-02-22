"use client";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HeartOutlined,
  BellOutlined,
  BarChartOutlined,
  UsergroupAddOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { ImSpoonKnife } from "react-icons/im";
import { LuBrain, LuFileSpreadsheet } from "react-icons/lu";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FiFlag } from "react-icons/fi";
import Image from "next/image";
import { Layout, Menu, Button, theme, Dropdown, MenuProps } from "antd";
import { useRouter, usePathname } from "next/navigation";
import UserTab from "@/app/_components/UserTab";
import UserTabCollapsed from "@/app/_components/UserTabCollapsed";
const { Header, Sider, Content } = Layout;

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  console.log(collapsed);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div style={{ padding: "10px", backgroundColor: "#1a1a1a" }}>
          <Image
            src="/images/mfa-logo-white.png"
            width={120}
            height={35}
            alt="mfa-logo-white"
          />
        </div>
        <Menu
          style={{ backgroundColor: "#1A1A1A" }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["users"]}
          onClick={({ key }) => router.push(`/${key}`)}
          selectedKeys={[`${pathname.substring(1)}`]}
          items={[
            {
              key: "users",
              icon: <UsergroupAddOutlined />,
              label: "Users",
            },
            {
              key: "revenue",
              icon: <BarChartOutlined />,
              label: "Revenue",
            },
            {
              key: "info-management",
              icon: <InfoCircleOutlined />,
              label: "Info management",
            },
            {
              key: "notifications",
              icon: <BellOutlined />,
              label: "Notifications",
            },
            {
              key: "workout",
              icon: <HeartOutlined />,
              label: "Workout",
            },
            {
              key: "nutrition",
              icon: <ImSpoonKnife />,
              label: "Nutrition",
            },
            {
              key: "meditation",
              icon: <LuBrain />,
              label: "Meditation",
            },
            {
              key: "community",
              icon: <IoPeopleCircleOutline />,
              label: "Community",
            },
            {
              key: "events",
              icon: <IoCalendarClearOutline />,
              label: "Events",
            },
            {
              key: "contests",
              icon: <FiFlag />,
              label: "Contests",
            },
            {
              key: "blog",
              icon: <LuFileSpreadsheet />,
              label: "Blog",
            },
          ]}
        />
        <div style={{ background: "#1a1a1a", padding: "0.5rem" }}>
          {collapsed ? <UserTabCollapsed /> : <UserTab />}
        </div>
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, background: colorBgContainer, display: "flex" }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <h1 className="font-bold" style={{ fontSize: "1.5rem" }}>
            {pathname.substring(1) !== "info-management"
              ? pathname.substring(1).toUpperCase()
              : "INFO MANAGEMENT"}
          </h1>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default SidebarLayout;
