import Image from "next/image";
export default function PostTab() {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <Image src="/images/exercise.png" width={70} height={70} alt="img" />
      </div>
      <div className="col-span-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        dignissimos odit.
      </div>
    </div>
  );
}
