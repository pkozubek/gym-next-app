"use server";

import { revalidatePath } from "next/cache";
import connectDB from "../db/connection";
import { ExerciseModel } from "../db/models";
import { redirect } from "next/navigation";
import { ExcerciseDTO } from "@/lib/types/Excercise";

const editExercise = async (id: string, exerciseInfo: ExcerciseDTO) => {
    await connectDB()

    const existingModel = await ExerciseModel.findById(id);

    let isFinishedWithSuccess = false;
    if(existingModel) {
        existingModel.title = exerciseInfo.title;
        existingModel.description = exerciseInfo.description;
        existingModel.videoUrl = exerciseInfo.videoUrl;
        existingModel.imageUrl = exerciseInfo.imageUrl;
        existingModel.tags = exerciseInfo.tags;

        try {
            await existingModel.save();
            isFinishedWithSuccess = true;
          } catch(err) {
            console.error(err)
          }
    }

    if(isFinishedWithSuccess) {
      revalidatePath(`/exercises/edit/${id}`)
      revalidatePath('/exercises');
      redirect('/exercises');
    }
  };

  export default editExercise;