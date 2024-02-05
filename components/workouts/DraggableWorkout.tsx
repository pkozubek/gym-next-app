import { DraggableItems } from "@/lib/types/Enums";
import { useDrag } from "react-dnd";

export default function DraggableWorkout() {
  const [{ opacity }, drag] = useDrag(() => ({
    type: DraggableItems.EXERCISE,
    item: { name: "WORKOUT 1" },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  }));

  return (
    <div ref={drag} className="w-16 h-16 border border-black border-solid">
      WORKOUT
    </div>
  );
}
