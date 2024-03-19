import { redirect } from "next/navigation";

const page = () => {
  redirect("/events/all-events");
};

export default page;
