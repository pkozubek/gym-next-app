import { WorkoutExerciseItem } from "@/lib/types/Excercise";
import EditableWorkoutExerciseItem from "./EditableWorkoutExerciseItem";

type EditableWorkoutExerciseListProps = {
  exercisesList: WorkoutExerciseItem[];
  isPersonalized: boolean;
  moveExerciseUp: (id: string) => void;
  moveExerciseDown: (id: string) => void;
  deleteExercise: (id: string) => void;
};

export default function EditableWorkoutExerciseList({
  exercisesList,
  isPersonalized,
  ...rest
}: EditableWorkoutExerciseListProps) {
  return (
    <div className="border border-black border-solid min-h-60 w-full">
      <div className="text-center py-2">DROP EXERCISE INTO LIST</div>
      <ul>
        {exercisesList.map((exerciseItem, index) => (
          <EditableWorkoutExerciseItem
            key={`${exerciseItem._id.toString()}-${index}`}
            data={exerciseItem}
            isPersonalized={isPersonalized}
            {...rest}
            isFirst={index === 0}
            isLast={index == exercisesList.length - 1}
          />
        ))}
      </ul>
    </div>
  );
}
