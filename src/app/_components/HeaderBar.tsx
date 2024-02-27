"use client";
import { Layout, theme } from "antd";
const { Header, Sider, Content } = Layout;

export default function HeaderBar({ title }: any) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Header
      style={{
        paddingLeft: "2rem",
        background: colorBgContainer,
        display: "flex",
        flexDirection: "column",
        height: "4rem",
      }}
    >
      <h1 className="font-bold" style={{ fontSize: "1.5rem" }}>
        {title}
      </h1>
    </Header>
  );
}
