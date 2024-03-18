import HeaderBackBar from "@/app/_components/HeaderBackBar";

export default function AddExercisePage() {
  return (
    <div>
      <HeaderBackBar title="NEW EXERCISE" />
      <div className="m-7 grid grid-cols-12 gap-4">
        <div className="col-span-4 bg-white rounded-md p-3">left div</div>
        <div className="col-span-8 bg-white rounded-md p-3">right div</div>
      </div>
    </div>
  );
}
