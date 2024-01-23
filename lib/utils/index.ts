import { PAGE_SIZE } from "./consts";

export function countPages(numberOfRecords: number) {
    return Math.ceil(numberOfRecords / PAGE_SIZE);
}