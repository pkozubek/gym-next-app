import { WorkoutExerciseItem } from "@/lib/types/Excercise";
import EditableWorkoutExerciseItem from "./EditableWorkoutExerciseItem";

type EditableWorkoutExerciseListProps = {
  exercisesList: WorkoutExerciseItem[];
  isPersonalized: boolean;
  moveExerciseUp: (id: string) => void;
  moveExerciseDown: (id: string) => void;
  deleteExercise: (id: string) => void;
  onSave: () => void;
};

export default function EditableWorkoutExerciseList({
  exercisesList,
  isPersonalized,
  onSave,
  ...rest
}: EditableWorkoutExerciseListProps) {
  return (
    <div className="border border-black border-solid min-h-60 w-full max-h-96 overflow-y-auto">
      <button
        className="w-full text-center border border-solid border-y-green-400 text-green-400 p-2"
        onClick={onSave}
      >
        Save
      </button>
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
