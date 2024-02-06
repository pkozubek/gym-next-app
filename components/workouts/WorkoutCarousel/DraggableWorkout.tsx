import Card from "@/components/ui/Card";
import { DraggableItems } from "@/lib/types/Enums";
import { PublicWorkoutDTO } from "@/lib/types/Workout";
import { useDrag } from "react-dnd";

type DraggableWorkoutProps = {
  workoutData: PublicWorkoutDTO;
};

export default function DraggableWorkout({
  workoutData,
}: DraggableWorkoutProps) {
  const [, drag] = useDrag(() => ({
    type: DraggableItems.EXERCISE,
    item: { name: "WORKOUT 1" },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  }));

  return (
    <div ref={drag}>
      <Card>
        <div className="p-8">
          <h2>{workoutData.title}</h2>
          <p>{workoutData.description}</p>
        </div>
      </Card>
    </div>
  );
}
