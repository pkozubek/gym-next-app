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

const PublicWorkoutExerciseRecord = new mongoose.Schema({
    exerciseId: {type: mongoose.Schema.Types.ObjectId, ref: "exercises"},
    reps: Number,
    order: Number
})

const PublicWorkoutSchema = new mongoose.Schema<PublicWorkoutDTO>({
    title: {type: String, required: true},
    description: {type: String},
    exercises: [PublicWorkoutExerciseRecord]
});



export const PublcWorkoutModel = mongoose.models?.PublicWorkout as mongoose.Model<PublicWorkoutDTO>  || mongoose.model<PublicWorkoutDTO>("PublicWorkout", PublicWorkoutSchema);