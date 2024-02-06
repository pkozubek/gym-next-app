"use client";

import { ExcerciseLeanDTO, Tags } from "@/lib/types/Excercise";
import { PaginatedResponse } from "@/lib/types/Shared";
import useSWR from "swr";
import { generatePaginatedApiRequest } from "..";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useExercises(selectedTags: Tags[], selectedPage?: number, pageSize?: number) {
    let apiRoute= '/api/exercises';
    const resp = useSWR<PaginatedResponse<ExcerciseLeanDTO>>(generatePaginatedApiRequest(apiRoute, selectedTags, selectedPage, pageSize), fetcher)
    return {...resp};
}