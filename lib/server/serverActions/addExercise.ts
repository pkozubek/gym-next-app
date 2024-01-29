"use server";

import { revalidatePath } from "next/cache";
import connectDB from "../db/connection";
import { ExerciseModel } from "../db/models";
import { redirect } from "next/navigation";
import { ExcerciseDTO } from "@/lib/types/Excercise";

const addExercise = async (exerciseInfo: ExcerciseDTO) => {
    await connectDB()

    const model = new ExerciseModel({
      ...exerciseInfo
    })
    
    let isFinishedWithSuccess = false;

    try {
      await model.save();
      isFinishedWithSuccess = true;
    } catch(err) {
      console.error(err)
    }

    if(isFinishedWithSuccess) {
      revalidatePath('/exercises');
      redirect('/exercises');
    }
  };

  export default addExercise;