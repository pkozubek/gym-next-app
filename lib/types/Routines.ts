import { Days } from "../utils/consts"
import { WorkoutExerciseItem } from "./Excercise"

export type Routine = {
    [Days.SUNDAY]: WorkoutExerciseItem[],
    [Days.MONDAY]: WorkoutExerciseItem[],
    [Days.TUESDAY]: WorkoutExerciseItem[]
    [Days.WEDNESDAY]: WorkoutExerciseItem[],
    [Days.THURSDAY]: WorkoutExerciseItem[],
    [Days.FRIDAY]: WorkoutExerciseItem[],
    [Days.SATURDAY]: WorkoutExerciseItem[]
}