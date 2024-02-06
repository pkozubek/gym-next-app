import { PublcWorkoutModel } from "../db/models";
import connectDB from "../db/connection";
import { Tags } from "@/lib/types/Excercise";
import { PaginatedResponse } from "@/lib/types/Shared";
import { countPages } from "@/lib/utils";

export async function getPublicWorkouts(page: number, pageSize: number) {
    try {
        await connectDB();
        return await PublcWorkoutModel.find().skip(page * pageSize).limit(pageSize).lean();
    }catch(err) {
        //handle err
    }
}

export async function getPublicWorkoutData(objectId: string) {
    try {
        await connectDB();
        return await PublcWorkoutModel.findById<any>(objectId).populate('exercises.exerciseId').lean();   
    } catch(err) {
        //handle err
    }
}

export async function getWorkoutsByTags(tags: Tags[], page?: number, pageSize?: number) {
    try {
        await connectDB();

        const query = PublcWorkoutModel.find();

        if(pageSize) {
            let currentPage = 0;
    
            if(page) currentPage = page;
            
            query.skip(currentPage * pageSize).limit(pageSize)
        }

        const numberOfRecords = await PublcWorkoutModel.find({}).merge(query).countDocuments().exec();
        let workouts:any[] = [];
        if(numberOfRecords > 0) {
            query.populate('exercises.exerciseId');

            /*
            TODO:
            ADD FILTER BY TAGS
            */
        
            workouts = await query.lean().exec();
        } 

        const resp:PaginatedResponse<any> = {
            hasNextPage: false,
            hasPreviousPage: false,
            numberOfPages:  countPages(numberOfRecords),
            records: workouts
        }
    
        return resp;
    } catch(err) {
        console.log(err)
    }
}