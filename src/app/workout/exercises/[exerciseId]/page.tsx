"use client";

import HeaderEditDelete from "@/app/_components/HeaderEditDelete";

export default function ExerciseDetailPage({ params }: any) {
  return (
    <div>
      <HeaderEditDelete title="EXERCISE DETAILS" />
      Exercise id: {params.exerciseId}
    </div>
  );
}
