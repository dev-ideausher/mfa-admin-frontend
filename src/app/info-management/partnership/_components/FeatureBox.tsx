import { PiBellSimpleFill } from "react-icons/pi";

export default function FeatureBox() {
  return (
    <div className="flex border-[1px] gap-2 rounded  m-2 p-2 pt-4 shadow-xl">
      <div className="p-1 bg-red-200 flex rounded-xl h-fit">
        <PiBellSimpleFill className="text-red-700 text-xl" />
      </div>
      <div>
        <p className="text-md">Live Location with Alerts</p>
        <p className="text-xs text-gray-500">
          Track live location, emergency alert and chat with your family.
        </p>
      </div>
    </div>
  );
}
