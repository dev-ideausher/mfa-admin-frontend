import { redirect } from "next/navigation";

const page = () => {
  redirect("/community/all-posts");
};

export default page;
