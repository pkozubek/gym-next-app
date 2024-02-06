import { Tags } from "../types/Excercise";
import { PAGE_SIZE } from "./consts";

export function countPages(numberOfRecords: number) {
    return Math.ceil(numberOfRecords / PAGE_SIZE);
}

export function generatePaginatedApiRequest(apiRoute: string, tags: Tags[], selectedPage?: number, pageSize?: number) {
    const queryParams:string[] = [];

    if(tags.length > 0) {
        queryParams.push(`tags=${tags.join(',')}`);
    }

    if(selectedPage !== 0 && !!selectedPage) {
        queryParams.push(`page=${selectedPage}`)
    }

    if(!!pageSize) {
        queryParams.push(`pageSize=${pageSize}`)
    }


    if(queryParams.length > 0) return `${apiRoute}?${queryParams.join("&")}`
    else return apiRoute;
}