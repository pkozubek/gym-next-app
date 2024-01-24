"use client";

import { ExcerciseLeanDTO, Tags } from "@/lib/types/Excercise";
import ExerciseCarouselItem from "./ExerciseCarouselItem";
import { useState } from "react";
import useExercises from "@/lib/utils/hooks/useExercises";

type ExerciseCarouselProps = {
  filterTags?: Tags[];
  pageSize?: number;
  selectedPage?: number;
  successfullDropFn: (data: ExcerciseLeanDTO) => void;
};

export default function ExerciseCarousel({
  filterTags = [],
  pageSize,
  selectedPage,
  successfullDropFn,
}: ExerciseCarouselProps) {
  const [currentlyOpenVideoExerciseId, setCurrentlyOpenVideo] = useState<
    string | null
  >(null);
  const { data, isLoading } = useExercises(filterTags, selectedPage, pageSize);

  if (isLoading) return "LOADING";

  const toggleVideo = (exerciseId: string) => {
    setCurrentlyOpenVideo((currentlySelected) =>
      currentlySelected !== exerciseId ? exerciseId : null
    );
  };

  const renderedExercises = data?.records.map((exercise) => (
    <ExerciseCarouselItem
      {...exercise}
      key={exercise._id.toString()}
      toggleVideo={toggleVideo}
      isVideoOpen={exercise._id.toString() === currentlyOpenVideoExerciseId}
      successfullDropFn={() => successfullDropFn(exercise)}
    />
  ));

  return <div className="flex flex-row">{renderedExercises}</div>;
}
