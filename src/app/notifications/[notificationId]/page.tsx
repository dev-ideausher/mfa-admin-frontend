import HeaderBackBar from "@/app/_components/HeaderBackBar";
import HeaderEditDelete from "@/app/_components/HeaderEditDelete";
import { Tag } from "antd";
export default function NotificationDetailPage({
  params,
}: {
  params: { notificationId: string };
}) {
  return (
    <div>
      <HeaderEditDelete title="NOTIFICATION DETAILS" />
      <div className="m-5">
        <div className="bg-white rounded-md w-1/2 p-5 ">
          <Tag color="gray">● Scheduled on Mar 14, 2024 16:14</Tag>
          <div className="flex flex-col gap-3">
            <h1 className="uppercase text-2xl font-bold">
              Don&apos;t miss the offer. Get 15 days free trial now. Valid till
              15th Feb.
            </h1>
            <div>
              <p className="text-gray-600">User Base</p>
              <p className="font-semibold">Registered</p>
            </div>
            <div>
              <p className="text-gray-600">Button</p>
              <p className="font-semibold">View Event</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
