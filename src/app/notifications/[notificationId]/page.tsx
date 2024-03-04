import HeaderBackBar from "@/app/_components/HeaderBackBar";

export default function NotificationDetailPage({
  params,
}: {
  params: { notificationId: string };
}) {
  return (
    <div>
      <HeaderBackBar title="NOTIFICATION DETAILS" />
      <p>Notofication id: {params.notificationId}</p>
    </div>
  );
}
