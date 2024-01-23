import { ExcerciseDTO } from "@/lib/types/Excercise";
import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema<ExcerciseDTO>({
    description: {type: String},
    imageUrl: {type: String},
    tags: {type: [String]},
    title: {type: String},
    videoUrl: {type: String}
});

export const ExerciseModel = mongoose.models?.Exercise as mongoose.Model<ExcerciseDTO>  || mongoose.model<ExcerciseDTO>("Exercise", ExerciseSchema);