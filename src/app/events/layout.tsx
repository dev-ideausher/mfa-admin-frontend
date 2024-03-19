import AppLayout from "@/layouts/AppLayout";

export default function LayoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppLayout>{children}</AppLayout>;
}
