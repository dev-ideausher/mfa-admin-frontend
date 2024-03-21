import { Tag } from "antd";
import Image from "next/image";

const Post = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image src="/images/person.png" alt="person" height={40} width={40} />
          <p className="font-semibold">Dana White</p>
        </div>
        <Tag color="green" className="h-fit">
          Active
        </Tag>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, id
          nam. Provident aperiam quae inventore deserunt minima mollitia libero
          sunt at saepe.
        </p>
        <p className="text-gray-400 mr-auto">2 days ago</p>
      </div>
      <Image
        className="mx-auto rounded-md"
        src="/images/post-pic.png"
        alt="post-pic"
        width={400}
        height={600}
      />
    </div>
  );
};

export default Post;
