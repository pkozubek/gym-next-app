"use client";

import DayContainer, { DayContainerProps } from "./DayContainer";
import DropContainer from "../ui/DropContainer";
import { Days } from "@/lib/utils/consts";
import { DraggableItems, DropContainers } from "@/lib/types/Enums";

type DroppableDayContainerProps = DayContainerProps & {
  day: Days;
};

export default function DroppableDayContainer({
  day,
  workouts,
}: DroppableDayContainerProps) {
  return (
    <DropContainer
      accept={[DraggableItems.EXERCISE]}
      containerName={`${DropContainers.ROUTINE}-${day}`}
      className="h-full w-1/7"
      onDropClassNames="bg-green-100"
    >
      <DayContainer day={day} workouts={workouts} />
    </DropContainer>
  );
}
