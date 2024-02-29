import AppLayout from "@/layouts/AppLayout";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/users");
  return (
    <AppLayout>
      <div>
        <h1>Home page</h1>
      </div>
    </AppLayout>
  );
}
