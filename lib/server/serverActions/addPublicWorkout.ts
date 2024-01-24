"use server";

import { WorkoutExerciseItem } from "@/lib/types/Excercise";
import connectDB from "../db/connection";
import {  WorkoutExerciseRecord } from "@/lib/types/Workout";
import { PublcWorkoutModel } from "../db/models";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const addPublicWorkout = async (title: string, description: string,exercisesList: WorkoutExerciseItem[] ) => {
    await connectDB();

    const publicWorkoutModel = new PublcWorkoutModel({
        title,
        description,
        exercises: exercisesList.map((el, order) => {
            const record: WorkoutExerciseRecord = {
                exerciseId: el._id,
                order,
                reps: el.reps
            }

            return record;
        })
    });

    let isFinishedWithSuccess = false;

    try {
        await publicWorkoutModel.save();
        isFinishedWithSuccess = true;
    } catch(err) {
        console.error(err);
    }
    
    if(isFinishedWithSuccess) {
        revalidatePath('/workouts');
        redirect('/workouts');
    }
}

export default addPublicWorkout;
