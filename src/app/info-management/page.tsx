import { redirect } from "next/navigation";
export default function InfoMgmtPage() {
  redirect("/info-management/partnership");
  return (
    <>
      <div>info mgmt</div>
    </>
  );
}
