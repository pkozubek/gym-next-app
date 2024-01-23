"use client";

import TagsSelection from "@/components/TagsSelection";
import EditableWorkoutExerciseList from "@/components/exercises/EditableWorkoutExerciseList";
import ExerciseCarousel from "@/components/exercises/ExerciseCarousel";
import DropContainer from "@/components/ui/DropContainer";
import { Tags } from "@/lib/types/Excercise";
import useEditableWorkout from "@/lib/utils/hooks/useEditableWorkout";

import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const tagsValues = Object.values(Tags);

export default function AddWorkoutPage() {
  const [selectedTags, setSelectedTags] = useState(tagsValues);

  const onTagSelect = (tag: Tags) => {
    setSelectedTags((currentlySelected) => {
      if (currentlySelected.includes(tag))
        return currentlySelected.filter((el) => el !== tag);
      else return [...currentlySelected, tag];
    });
  };

  const { exerciseList, addExercise, ...rest } = useEditableWorkout();

  return (
    <>
      <div>
        <TagsSelection preSelected={tagsValues} selectTag={onTagSelect} />
      </div>
      <DndProvider backend={HTML5Backend}>
        <ExerciseCarousel
          filterTags={selectedTags}
          pageSize={20}
          selectedPage={0}
          successfullDropFn={addExercise}
        />
        <DropContainer>
          <EditableWorkoutExerciseList
            exercisesList={exerciseList}
            isPersonalized={false}
            {...rest}
          />
        </DropContainer>
      </DndProvider>
    </>
  );
}
