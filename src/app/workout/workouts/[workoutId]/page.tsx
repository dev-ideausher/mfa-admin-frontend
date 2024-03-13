"use client";

import HeaderEditDelete from "@/app/_components/HeaderEditDelete";

export default function WorkoutDetailPage({ params }: any) {
  return (
    <div>
      <HeaderEditDelete title="WORKOUT DETAILS" />
      Workout id: {params.workoutId}
    </div>
  );
}
