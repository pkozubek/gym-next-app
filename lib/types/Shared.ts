import { FlattenMaps, Types } from "mongoose";

export interface PaginatedResponse<T> {
    records: T[],
    hasNextPage: boolean,
    hasPreviousPage: boolean,
    numberOfPages: number,
};

export type LeanDocument<T> =  (FlattenMaps<T> & {
    _id: Types.ObjectId;
})[]