import { Types } from "mongoose"

export type WorkoutExerciseRecord = {
    exerciseId: Types.ObjectId,
    reps: number,
    order: number
}

export type PublicWorkoutDTO = {
    title: string,
    description: string,
    exercises: WorkoutExerciseRecord[]
}