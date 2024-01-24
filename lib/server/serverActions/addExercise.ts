"use server";

import connectDB from "../db/connection";
import { ExerciseModel } from "../db/models";

const addExercise = async (formData: FormData) => {
    await connectDB()

    const title = formData.get("title")?.toString() ?? "";
    const description = formData.get("description")?.toString() ?? "";
    const videoUrl = formData.get("videoUrl")?.toString() ?? "";
    const imageUrl = formData.get("imageUrl")?.toString() ?? "";
    const tags = formData.getAll("tags") || [];

    const model = new ExerciseModel({
      description,
      imageUrl,
      tags,
      title,
      videoUrl
    })
    
    try {
      await model.save();
    } catch(err) {
      console.error(err)
    }
  };

  export default addExercise;