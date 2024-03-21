import React from "react";
import Image from "next/image";
const UserTab = ({ text }: { text: string }) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-1">
        <Image src="/images/person.png" alt="exercise" width={30} height={30} />
      </div>
      <div className="col-span-3">{text}</div>
    </div>
  );
};

export default UserTab;
