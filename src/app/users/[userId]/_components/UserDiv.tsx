import { UserOutlined } from "@ant-design/icons";
import { Avatar, Tag } from "antd";
const UserDiv = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Avatar size={64} icon={<UserOutlined />} />
        <h1 className="text-2xl font-bold">JOHN TRAVOLTA</h1>
        <p className="text-gray-500">Joined Mar 13, 2024 23:14</p>
        <Tag color="green"> ● Active</Tag>
      </div>
      <hr />
      <div></div>
    </div>
  );
};

export default UserDiv;
