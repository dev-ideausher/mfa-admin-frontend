"use client";

import HeaderEditDelete from "@/app/_components/HeaderEditDelete";

export default function PlanDetailPage({ params }: any) {
  return (
    <div>
      <HeaderEditDelete title="PLAN DETAILS" />
      Plan id: {params.planId}
    </div>
  );
}
