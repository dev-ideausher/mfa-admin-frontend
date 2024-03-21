import { Button } from "antd";
import Image from "next/image";
import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
const Comment = () => {
  return (
    <div className="flex justify-between p-2 border-b-[1px] border-gray-200">
      <div className="flex gap-2">
        <Image
          src="/images/person.png"
          width={40}
          height={30}
          alt="person"
          className="rounded-full"
        />
        <div>
          <div className="flex gap-5">
            <p className="text-xs font-semibold">John Adams</p>
            <p className="text-xs text-gray-300">2 days ago</p>
          </div>
          <p>Great Post!</p>
        </div>
      </div>

      <DeleteOutlined />
    </div>
  );
};

export default Comment;
