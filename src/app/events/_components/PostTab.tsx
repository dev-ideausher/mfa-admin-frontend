"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PostTab({ title, row }: { title: string; row: any }) {
  const router = useRouter();
  return (
    <div
      className="grid grid-cols-5 cursor-pointer"
      onClick={() => router.push(`${row.id}`)}
    >
      <div className="col-span-1">
        <Image src="/images/login.png" width={60} height={30} alt="pic" />
      </div>
      <div className="col-span-4">{title}</div>
    </div>
  );
}
