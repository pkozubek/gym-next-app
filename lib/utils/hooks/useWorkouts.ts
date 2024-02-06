import { Tags } from "@/lib/types/Excercise";
import { PaginatedResponse } from "@/lib/types/Shared";
import useSWR from "swr";
import { generatePaginatedApiRequest } from "..";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useWorkouts(selectedTags: Tags[], selectedPage?: number, pageSize?: number) {
    const apiRoute = '/api/workouts';

    const resp = useSWR<PaginatedResponse<any>>(generatePaginatedApiRequest(apiRoute, selectedTags, selectedPage, pageSize), fetcher)

    return {...resp};
}