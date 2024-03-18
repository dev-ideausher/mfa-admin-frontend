import { redirect } from "next/navigation";

const page = () => {
  redirect("/blog/posts");
};

export default page;
