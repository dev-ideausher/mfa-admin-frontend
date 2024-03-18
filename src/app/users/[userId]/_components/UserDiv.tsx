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
      <div className="flex flex-col gap-2">
        <h2 className="text-md font-semibold">BASIC DETAILS</h2>
        <div>
          <p className="text-gray-500">User ID</p>
          <p className="font-semibold">34543</p>
        </div>
        <div>
          <p className="text-gray-500">Contact Number</p>
          <p className="font-semibold">+1 98430393</p>
        </div>
        <div>
          <p className="text-gray-500">Email ID</p>
          <p className="font-semibold">john.travolta@email.com</p>
        </div>
        <div>
          <p className="text-gray-500">Date of Birth</p>
          <p className="font-semibold">11-10-1992</p>
        </div>
        <hr />
        <h2 className="text-md font-semibold">FITNESS DETAILS</h2>
        <div>
          <p className="text-gray-500">Fitness Goals</p>
          <p className="font-semibold">Weight Gain</p>
        </div>
        <div>
          <p className="text-gray-500">Weight</p>
          <p className="font-semibold">70 kg</p>
        </div>
        <div>
          <p className="text-gray-500">Height</p>
          <p className="font-semibold">5 feet 11 inches</p>
        </div>
      </div>
    </div>
  );
};

export default UserDiv;
