import { redirect } from "next/navigation";

const page = () => {
  redirect("/meditation/meditations");
  return <div></div>;
};

export default page;
