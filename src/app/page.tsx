"use client";

import AppLayout from "@/layouts/AppLayout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/users");
  }, [router]);
  return (
    <AppLayout>
      <div>
        <h1>Home page</h1>
      </div>
    </AppLayout>
  );
}
