import { WorkoutExerciseItem } from "@/lib/types/Excercise";
import { FaCaretDown, FaCaretUp, FaTrash } from "react-icons/fa6";

type EditableWorkoutExerciseItemProps = {
  data: WorkoutExerciseItem;
  isPersonalized: boolean;
  moveExerciseUp: (id: string) => void;
  moveExerciseDown: (id: string) => void;
  deleteExercise: (id: string) => void;
  isFirst: boolean;
  isLast: boolean;
};

export default function EditableWorkoutExerciseItem({
  data,
  moveExerciseDown,
  moveExerciseUp,
  deleteExercise,
  isFirst,
  isLast,
}: EditableWorkoutExerciseItemProps) {
  const idString = data._id.toString();

  return (
    <li>
      <div className="flex justify-between align-middle w-full min-h-16 border border-black rounded">
        <div>
          <img src={data.imageUrl} className="h-8 w-8 rounded-sm" />
        </div>
        <div>
          <h3>{data.title}</h3>
        </div>
        <div>x {data.reps}</div>
        <div>
          {!isFirst && (
            <button onClick={() => moveExerciseUp(idString)}>
              <FaCaretUp />
            </button>
          )}
          <button onClick={() => deleteExercise(idString)}>
            <FaTrash />
          </button>
          {!isLast && (
            <button onClick={() => moveExerciseDown(idString)}>
              <FaCaretDown />
            </button>
          )}
        </div>
      </div>
    </li>
  );
}
