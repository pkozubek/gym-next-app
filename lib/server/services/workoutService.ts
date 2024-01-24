import { PublicWorkoutDTO } from "@/lib/types/Workout";
import { PublcWorkoutModel } from "../db/models";

export async function getPublicWorkouts(page: number, pageSize: number) {

    const numberOfRecords = await PublcWorkoutModel.countDocuments({});

    //TODO: populate fix
    const workouts = await PublcWorkoutModel.find<any>({}).skip(page * pageSize).limit(pageSize).populate('exercises.exerciseId').lean()

    return workouts
}