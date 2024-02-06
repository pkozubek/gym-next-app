"use client";

import { Tags } from "@/lib/types/Excercise";
import useWorkouts from "@/lib/utils/hooks/useWorkouts";
import DraggableWorkout from "./DraggableWorkout";

export default function WorkoutCarousel() {
  const { data, isLoading } = useWorkouts([Tags.BICEPS]);

  if (isLoading) return <div>Loading</div>;

  return (
    <div className="flex gap-x-2 my-2">
      {data?.records?.map((el) => (
        <DraggableWorkout workoutData={el} key={el._id} />
      ))}
    </div>
  );
}
