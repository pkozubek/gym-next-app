"use client";

import WorkoutWeek from "@/components/WorkoutWeek";
import WorkoutCarousel from "@/components/workouts/WorkoutCarousel";
import DraggableWorkout from "@/components/workouts/WorkoutCarousel/DraggableWorkout";
import RoutineContextProvider from "@/lib/utils/context/RoutineAddEditContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function RoutineAddPage() {
  return (
    <RoutineContextProvider>
      <DndProvider backend={HTML5Backend}>
        <WorkoutCarousel />
        <WorkoutWeek isDroppable={true} />
      </DndProvider>
    </RoutineContextProvider>
  );
}
