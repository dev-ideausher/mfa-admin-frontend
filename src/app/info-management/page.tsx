import { redirect } from "next/navigation";
import { Spin } from "antd";
export default function InfoMgmtPage() {
  redirect("/info-management/partnership");
  return (
    <>
      <div className="flex justify-center items-center">
        <Spin size="large" />
      </div>
    </>
  );
}
