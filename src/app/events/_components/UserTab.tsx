import Image from "next/image";
export default function UserTab({ title }: { title: string }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-1">
        <Image src="/images/avatar.png" width={40} height={40} alt="pic" />
      </div>
      <div className="col-span-3">
        <p className="text-xs font-semibold">{title}</p>
        <p className="text-gray-500 text-xs">+1 35902475</p>
      </div>
    </div>
  );
}
