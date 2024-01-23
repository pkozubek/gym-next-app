import { ExcerciseLeanDTO, WorkoutExerciseItem } from "@/lib/types/Excercise";
import { useState } from "react";
import { DEFAULT_REPS } from "../consts";

export default function useEditableWorkout(defaultData: WorkoutExerciseItem[] = []) {
    const [exerciseList, setExercisesList] = useState<WorkoutExerciseItem[]>(defaultData);

    const moveExerciseUp = (id: string) => {
        setExercisesList(currentExerciseList => {
            const foundIndex = currentExerciseList.findIndex(el => el._id.toString() === id);

            if(foundIndex > 0) {
                const cpyOfArray = [...currentExerciseList];

                const selected = cpyOfArray[foundIndex];
                cpyOfArray[foundIndex] = cpyOfArray[foundIndex - 1];
                cpyOfArray[foundIndex - 1] = selected;

                return cpyOfArray;
            } else return currentExerciseList;
        });
    }

    const moveExerciseDown = (id: string) => {
        setExercisesList(currentExerciseList => {
            const foundIndex = currentExerciseList.findIndex(el => el._id.toString() === id);

            if(foundIndex > 0) {
                const cpyOfArray = [...currentExerciseList];

                const selected = cpyOfArray[foundIndex];
                cpyOfArray[foundIndex] = cpyOfArray[foundIndex + 1];
                cpyOfArray[foundIndex + 1] = selected;

                return cpyOfArray;
            } else return currentExerciseList;
        });
    }

    const deleteExercise = (id: string) => {
        setExercisesList(currentExerciseList => currentExerciseList.filter(el => el._id.toString() !== id));
    }

    const addExercise = ({_id, title, imageUrl, videoUrl, tags}: ExcerciseLeanDTO) => {


        const editableExercise: WorkoutExerciseItem = {
            _id,
            imageUrl,
            reps: DEFAULT_REPS,
            tags,
            title,
            videoUrl,
            weight: 0
        };

        setExercisesList(currentExerciseList => {
            if(!!currentExerciseList.find(el => el._id.toString() === _id.toString())) {
                return currentExerciseList
            }

            return [...currentExerciseList, editableExercise]
        });
    }

    return {
        exerciseList,
        moveExerciseUp,
        moveExerciseDown,
        addExercise, 
        deleteExercise
    }
}