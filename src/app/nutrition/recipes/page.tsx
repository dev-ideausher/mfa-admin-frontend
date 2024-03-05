import HeaderBar from "@/app/_components/HeaderBar";
import TopMenu from "@/app/_components/TopMenu";

const header_items = [
  {
    key: "ingredients",
    label: "Ingredients",
  },
  {
    key: "recipes",
    label: "Recipes",
  },
  {
    key: "plans",
    label: "Plans",
  },
];
export default function page() {
  return (
    <div>
      <HeaderBar title="NUTRITION" />
      <TopMenu header_items={header_items} defaultKey="recipes" />
    </div>
  );
}
