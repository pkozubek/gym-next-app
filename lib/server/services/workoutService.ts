import { PublcWorkoutModel } from "../db/models";
import connectDB from "../db/connection";

export async function getPublicWorkouts(page: number, pageSize: number) {
    await connectDB();

    //TODO:
    //try-catch-add-fn
    const workouts = await PublcWorkoutModel.find().skip(page * pageSize).limit(pageSize).lean();

    return workouts
}

export async function getPublicWorkoutData(objectId: string) {
    await connectDB();
    
    //TODO:
    //try-catch-add-fn
    const workout = await PublcWorkoutModel.findById<any>(objectId).populate('exercises.exerciseId').lean();

    return workout;
}