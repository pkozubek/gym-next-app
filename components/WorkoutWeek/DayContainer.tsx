import { WorkoutExerciseItem } from "@/lib/types/Excercise";
import { Days } from "@/lib/utils/consts";

export type DayContainerProps = {
  day: Days;
  workouts: WorkoutExerciseItem[];
  isNested?: boolean;
};

export default function DayContainer({
  day,
  workouts,
  isNested = false,
}: DayContainerProps) {
  return (
    <div className={`h-full min-h-32 ${isNested ? "w-1/7" : "w-full"} border`}>
      <div>{day}</div>
      <ul>
        {workouts.map((wrk) => (
          <li>{wrk.title}</li>
        ))}
      </ul>
    </div>
  );
}
