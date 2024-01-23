"use client";

import { ExcerciseLeanDTO, Tags } from "@/lib/types/Excercise";
import { PaginatedResponse } from "@/lib/types/Shared";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useExercises(selectedTags: Tags[], selectedPage?: number, pageSize?: number) {
    const queryParams:string[] = [];

    if(selectedTags.length > 0) {
        queryParams.push(`tags=${selectedTags.join(',')}`);
    }

    if(selectedPage !== 0 && !!selectedPage) {
        queryParams.push(`page=${selectedPage}`)
    }

    if(!!pageSize) {
        queryParams.push(`pageSize=${pageSize}`)
    }

    let apiRoute= '/api/exercises';

    if(queryParams.length > 0) apiRoute += `?${queryParams.join("&")}`;

    const resp = useSWR<PaginatedResponse<ExcerciseLeanDTO>>(apiRoute, fetcher)

    return {...resp};
}