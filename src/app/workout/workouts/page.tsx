import TopMenu from "@/app/_components/TopMenu";
import HeaderBar from "@/app/_components/HeaderBar";
export default function ExercisesPage() {
  const header_items = [
    {
      key: "exercises",
      label: "Exercises",
    },
    {
      key: "workouts",
      label: "Workouts",
    },
    {
      key: "plans",
      label: "Plans",
    },
  ];
  return (
    <div>
      <HeaderBar title="WORKOUT" />
      <TopMenu header_items={header_items} defaultKey="workouts" />
    </div>
  );
}
