"use client";
import { Button, Layout, theme, Modal } from "antd";
const { Header } = Layout;
import { useRouter } from "next/navigation";
import { IoArrowBack, IoCloseCircle } from "react-icons/io5";

export default function SuspendBar({ title }: { title: string }) {
  const router = useRouter();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Header
      style={{
        paddingLeft: "2rem",
        background: colorBgContainer,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "4rem",
        gap: 5,
        justifyContent: "space-between",
      }}
    >
      <div className="flex items-center gap-5">
        <Button onClick={() => router.back()}>
          <IoArrowBack />
        </Button>
        <h1 className="font-bold" style={{ fontSize: "1.5rem" }}>
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-5">
        <Button
          style={{
            width: "100px",
            alignItems: "center",
            display: "flex",
          }}
          type="primary"
          danger
          icon={<IoCloseCircle />}
        >
          Suspend
        </Button>
      </div>
    </Header>
  );
}
