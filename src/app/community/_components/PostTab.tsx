import React from "react";
import Image from "next/image";
import Link from "next/link";
const PostTab = ({ text, postId }: { text: string; postId: string }) => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <Image
          src="/images/exercise.png"
          alt="exercise"
          width={50}
          height={50}
        />
      </div>
      <div className="col-span-4">
        <Link href={`/community/post/${postId}`}>{text}</Link>
      </div>
    </div>
  );
};

export default PostTab;
