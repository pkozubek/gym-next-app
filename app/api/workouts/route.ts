import { getWorkoutsByTags } from "@/lib/server/services/workoutService";
import { Tags } from "@/lib/types/Excercise";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
    const searchParams = request.nextUrl.searchParams
    const tags = searchParams.get('tags');
    const page = searchParams.get('page');
    const pageSize = searchParams.get('pageSize');

    const tagsArray: Tags[] = !!tags ? tags.split(",").map(el => el as Tags) : [];  
    
    const data = await getWorkoutsByTags(tagsArray, Number(page), Number(pageSize));

    return Response.json(data);
}