"use client";

import TagsSelection from "@/components/TagsSelection";
import EditableWorkoutExerciseList from "@/components/exercises/EditableWorkoutExerciseList";
import ExerciseCarousel from "@/components/exercises/ExerciseCarousel";
import DropContainer from "@/components/ui/DropContainer";
import addPublicWorkout from "@/lib/server/serverActions/exercise/addPublicWorkout";
import { DraggableItems, DropContainers } from "@/lib/types/Enums";
import { Tags } from "@/lib/types/Excercise";
import useEditableWorkout from "@/lib/utils/hooks/useEditableWorkout";

import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const tagsValues = Object.values(Tags);

export default function AddWorkoutPage() {
  const [selectedTags, setSelectedTags] = useState(tagsValues);

  const { exerciseList, addExercise, ...rest } = useEditableWorkout();

  const onSave = () => {
    addPublicWorkout("test", "test", exerciseList);
  };

  return (
    <>
      <div>
        <TagsSelection
          preSelected={tagsValues}
          selectHandler={setSelectedTags}
        />
      </div>
      <DndProvider backend={HTML5Backend}>
        <ExerciseCarousel
          filterTags={selectedTags}
          pageSize={20}
          selectedPage={0}
          successfullDropFn={addExercise}
        />
        <DropContainer
          accept={[DraggableItems.EXERCISE]}
          containerName={DropContainers.WORKOUT}
        >
          <EditableWorkoutExerciseList
            exercisesList={exerciseList}
            isPersonalized={false}
            onSave={onSave}
            {...rest}
          />
        </DropContainer>
      </DndProvider>
    </>
  );
}
