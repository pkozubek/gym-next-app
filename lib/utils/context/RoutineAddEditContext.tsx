"use client";
import { Routine } from "@/lib/types/Routines";
import { createContext, useState } from "react";
import { Days } from "../consts";
import { WorkoutExerciseItem } from "@/lib/types/Excercise";

export const defaultDataForRoutine: Routine = {
  [Days.SATURDAY]: [],
  [Days.MONDAY]: [],
  [Days.TUESDAY]: [],
  [Days.WEDNESDAY]: [],
  [Days.THURSDAY]: [],
  [Days.FRIDAY]: [],
  [Days.SUNDAY]: [],
};

type IRoutineContext = {
  data: Routine;
  addWorkoutToDay: (day: Days, workout: WorkoutExerciseItem) => void;
  removeWorkoutFromDay: (day: Days, workout: WorkoutExerciseItem) => void;
};

export const RoutineContext = createContext<IRoutineContext>({
  data: defaultDataForRoutine,
  addWorkoutToDay: (day: Days, workout: WorkoutExerciseItem) => {},
  removeWorkoutFromDay: (day: Days, workout: WorkoutExerciseItem) => {},
});

type RoutineContextProviderProps = {
  children: JSX.Element[] | JSX.Element;
  defaultRoutine?: Routine;
};

export default function RoutineContextProvider({
  children,
  defaultRoutine = defaultDataForRoutine,
}: RoutineContextProviderProps) {
  const [routine, setRoutine] = useState(defaultRoutine);

  const addWorkoutToDay = (day: Days, workout: WorkoutExerciseItem) => {
    setRoutine((currentRoutine) => {
      const clonedRoutine = structuredClone(currentRoutine);

      const foundWorkout = clonedRoutine[day].find(
        (el) => el._id.toString() === workout._id.toString()
      );

      if (!foundWorkout) {
        clonedRoutine[day] = [...structuredClone(clonedRoutine[day]), workout];
      }

      return clonedRoutine;
    });
  };

  const removeWorkoutFromDay = (day: Days, workout: WorkoutExerciseItem) => {};

  const dataForProvider: IRoutineContext = {
    data: routine,
    addWorkoutToDay,
    removeWorkoutFromDay,
  };

  return (
    <RoutineContext.Provider value={dataForProvider}>
      {children}
    </RoutineContext.Provider>
  );
}
