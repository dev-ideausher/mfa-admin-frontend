import SidebarLayout from "./SidebarLayout";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SidebarLayout>{children}</SidebarLayout>
    </div>
  );
};
export default AppLayout;
