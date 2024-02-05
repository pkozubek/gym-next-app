export const PAGE_SIZE = 20;
export const DEFAULT_REPS = 12;

export enum Days {
    SUNDAY = "Sunday",
    MONDAY = "Monday",
    TUESDAY = "Tuesday",
    WEDNESDAY = "Wednesday",
    THURSDAY = "Thursday",
    FRIDAY = "Friday",
    SATURDAY = "Saturday",
}

export const getTodayDate = () => {
    const todayDay = new Date().getDate();

    return Object.values(Days)[todayDay];
}