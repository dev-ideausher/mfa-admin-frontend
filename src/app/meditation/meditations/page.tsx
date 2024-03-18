"use client";
import HeaderBar from "@/app/_components/HeaderBar";
import TopMenu from "@/app/_components/TopMenu";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  const header_items = [
    {
      key: "meditations",
      label: "Meditations",
    },
    {
      key: "plans",
      label: "Plans",
    },
  ];
  return (
    <div>
      <HeaderBar title="MEDITATION" />
      <TopMenu header_items={header_items} defaultKey="meditations" />
    </div>
  );
}
