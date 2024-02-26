import AppLayout from "@/layouts/AppLayout";
import HeaderBar from "../_components/HeaderBar";

export default function InfoMgmtPage() {
  const header_items = [
    {
      key: "partnership",
      label: "Partnership",
    },
    {
      key: "privacy-policy",
      label: "Privacy policy",
    },
    {
      key: "terms-conditions",
      label: "Terms and Conditions",
    },
  ];
  return (
    <AppLayout>
      <HeaderBar header_items={header_items} default={header_items[0]} />
      <div>ingo mgmt</div>
    </AppLayout>
  );
}
