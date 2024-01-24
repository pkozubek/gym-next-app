import { ExcerciseDTO } from "@/lib/types/Excercise";
import { PublicWorkoutDTO } from "@/lib/types/Workout";
import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema<ExcerciseDTO>({
    description: {type: String},
    imageUrl: {type: String},
    tags: {type: [String]},
    title: {type: String},
    videoUrl: {type: String}
});

export const ExerciseModel = mongoose.models?.Exercise as mongoose.Model<ExcerciseDTO>  || mongoose.model<ExcerciseDTO>("Exercise", ExerciseSchema);

const PublicWorkoutSchema = new mongoose.Schema<PublicWorkoutDTO>({
    title: {type: String, required: true},
    description: {type: String},
    exercises: [{
        exerciseId: {type: mongoose.Schema.Types.ObjectId, ref: "Exercise"},
        reps: Number,
        order: Number
    }]
});



export const PublcWorkoutModel = mongoose.models?.PublicWorkout as mongoose.Model<PublicWorkoutDTO>  || mongoose.model<PublicWorkoutDTO>("PublicWorkout", PublicWorkoutSchema);