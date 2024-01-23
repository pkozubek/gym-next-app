
import { ExcerciseDTO, ExcerciseLeanDTO, Tags } from "@/lib/types/Excercise";
import { PaginatedResponse } from "@/lib/types/Shared";
import { countPages } from "@/lib/utils";
import { ExerciseModel } from "../db/models";
import connectDB from "../db/connection";

export async function getExercises(page: number, pageSize: number) {
    await connectDB();

    const numberOfRecords = await ExerciseModel.countDocuments({});

    const exercises = await ExerciseModel.find<ExcerciseDTO>({}).skip(page * pageSize).limit(pageSize).lean()

    const resp:PaginatedResponse<typeof exercises[0]> = {
        hasNextPage: false,
        hasPreviousPage: false,
        numberOfPages:  countPages(numberOfRecords),
        records: exercises
    }

    return resp;
}

export async function getExercisesFilteredByTags(tags: Tags[], page?: number, pageSize?: number) {
    await connectDB();

    const query = ExerciseModel.find<ExcerciseDTO>({});

    query.find({
        tags: {
            $in: tags
        }
    })


    if(pageSize) {
        let currentPage = 0;

        if(page) currentPage = page;
        
        query.skip(currentPage * pageSize).limit(pageSize)
    }

    
    const numberOfRecords = await ExerciseModel.find<ExcerciseDTO>({}).merge(query).countDocuments().exec();
    const exercises = await query.lean().exec();

    const resp:PaginatedResponse<ExcerciseLeanDTO> = {
        hasNextPage: false,
        hasPreviousPage: false,
        numberOfPages:  countPages(numberOfRecords),
        records: exercises
    }

    return resp;
}
