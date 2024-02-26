import Image from "next/image";
export default function TableUser() {
  return (
    <div className="flex gap-4 items-center cursor-pointer">
      <div>
        <Image src="/images/avatar.png" height={30} width={30} alt="avatar" />
      </div>
      <div>
        <p className="font-semibold">Henry Fiat</p>
        <p className="text-xs text-gray-600">+1 53268 23425</p>
      </div>
    </div>
  );
}
