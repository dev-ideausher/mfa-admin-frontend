import { Button } from "antd";
import Image from "next/image";
import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
const Like = () => {
  return (
    <div className="flex justify-start gap-3 p-2 border-b-[1px] items-center border-gray-200">
      <Image
        src="/images/person.png"
        width={40}
        height={30}
        alt="person"
        className="rounded-full"
      />
      <p className="text-sm font-semibold">John Adams</p>
      <p className="text-xs text-gray-300">2 days ago</p>
    </div>
  );
};

export default Like;
