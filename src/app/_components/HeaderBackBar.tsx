"use client";
import { Button, Layout, theme, Modal } from "antd";
const { Header } = Layout;
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

export default function HeaderBackBar({ title }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    router.back();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
          style={{ width: "100px" }}
          onClick={showModal}
          type="text"
          danger
        >
          Discard
        </Button>
        <Button style={{ width: "100px" }} type="primary" danger>
          Save
        </Button>
      </div>
      {/* Modal */}
      <Modal
        title="Do you want to discard changes"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel} type="text" danger>
            Cancel
          </Button>,
          <Button key="submit" onClick={handleOk} type="primary" danger>
            Discard
          </Button>,
        ]}
      >
        <p>You will lose your progress</p>
      </Modal>
    </Header>
  );
}
