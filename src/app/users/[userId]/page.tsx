import SuspendBar from "./_components/SuspendBar";
import UserDiv from "./_components/UserDiv";

export default function SingleUSerPage({ params }: any) {
  return (
    <div>
      <SuspendBar title="USER DETAILS" />
      <div className="m-5 grid grid-cols-12 gap-4">
        <div className="bg-white rounded-md col-span-4 p-4">
          <UserDiv />
        </div>
        <div className="bg-white rounded-md col-span-8 p-2">right</div>
      </div>
    </div>
  );
}
