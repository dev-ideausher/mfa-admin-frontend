import AppLayout from "@/layouts/AppLayout";
import { redirect } from "next/navigation";
import HeaderBar from "../_components/HeaderBar";

const page = () => {
  redirect("/workout/exercises");
  return <p>Workout</p>;
};

export default page;
