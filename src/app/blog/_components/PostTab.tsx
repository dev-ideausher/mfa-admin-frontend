"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function PostTab({
  title,
  postId,
}: {
  title: string;
  postId: string;
}) {
  const router = useRouter();
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <Image src="/images/exercise.png" width={70} height={70} alt="img" />
      </div>
      <div
        onClick={() => router.push(`/blog/${postId}`)}
        className="col-span-4 text-blue-700 underline hover:text-blue-900 cursor-pointer"
      >
        {title}
      </div>
    </div>
  );
}
