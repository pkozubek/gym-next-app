import { FlattenMaps, Types } from "mongoose";

export type ExcerciseDTO = {
    title: string;
    description: string;
    videoUrl: string;
    imageUrl: string;
    tags: Array<string>;
};

export type WorkoutExerciseItem = Pick<ExcerciseLeanDTO, 'title' | 'tags' | 'imageUrl' | 'videoUrl' | '_id'> & {
    reps: number,
    weight: number
}

export type ExcerciseLeanDTO =  (FlattenMaps<ExcerciseDTO> & {
    _id: Types.ObjectId;
});

export type ExcerciseWithoutVideo = Omit<ExcerciseDTO, "videoUrl">;

export enum Tags {
    CHEST = "Chest",
    BICEPS = "Biceps"
};

