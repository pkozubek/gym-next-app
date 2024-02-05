import DayContainer from "./DayContainer";
import { Days } from "@/lib/utils/consts";
import DroppableDayContainer from "./DroppableDayContainer";

const [sunday, ...rest] = Object.values(Days);
const workWeek = [...rest, sunday];

type WorkoutWeekProps = {
  isDroppable: boolean;
};

export default function WorkoutWeek({ isDroppable }: WorkoutWeekProps) {
  const renderedElements = workWeek.map((day) => {
    if (isDroppable) {
      return <DroppableDayContainer day={day} workouts={[]} key={day} />;
    } else {
      return <DayContainer day={day} workouts={[]} key={day} />;
    }
  });

  return <div className="h-full w-full flex flex-row">{renderedElements}</div>;
}
