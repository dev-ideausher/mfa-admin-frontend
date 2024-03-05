import { redirect } from "next/navigation";

const page = () => {
  redirect("/nutrition/ingredients");
  return <div></div>;
};

export default page;
