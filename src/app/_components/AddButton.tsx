"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";
export default function AddButton({ btnText, toRoute }: any) {
  const router = useRouter();
  return (
    <Button type="primary" danger onClick={() => router.push(`${toRoute}`)}>
      {btnText}
    </Button>
  );
}
