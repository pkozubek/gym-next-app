"use client";

import addExercise from "@/lib/server/serverActions/exercise/addExercise";
import { useForm } from "react-hook-form";

import YoutubeVideo from "../YoutubeVideo";
import TagsSelection from "../TagsSelection";

import { ExcerciseDTO, Tags } from "@/lib/types/Excercise";
import editExercise from "@/lib/server/serverActions/exercise/editExercise";

type ExerciseAddEditFormProps = {
  exerciseId?: string;
  defaultValues?: ExcerciseDTO;
};

const DEFAULT_EXERCISE_VALUES: ExcerciseDTO = {
  title: "",
  imageUrl: "",
  description: "",
  videoUrl: "",
  tags: [],
};

export default function ExerciseAddEditForm({
  exerciseId,
  defaultValues = DEFAULT_EXERCISE_VALUES,
}: ExerciseAddEditFormProps) {
  const isEdit = !!exerciseId;

  const { handleSubmit, register, getValues, setValue } = useForm<ExcerciseDTO>(
    {
      defaultValues,
    }
  );

  const values = getValues();

  const onSubmit = async (formData: ExcerciseDTO) => {
    if (isEdit) {
      editExercise(exerciseId, formData);
    } else {
      addExercise(formData);
    }
  };

  const onTagSelection = (selectedValues: Tags[]) => {
    setValue("tags", selectedValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="title">Name of Exercise</label>
        <input
          id="title"
          type="text"
          {...register("title", { required: true, minLength: 3 })}
        />
      </div>
      {values.imageUrl ? (
        <img
          src={values.imageUrl}
          alt="Exercise image"
          width={460}
          height={480}
        />
      ) : null}
      <div className="mb-4">
        <label htmlFor="imageUrl">Image url</label>
        <input
          id="imageUrl"
          type="url"
          {...register("imageUrl", { required: true })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows={5}
          className="resize-none"
          required
          {...register("description", { required: true })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="videoUrl">Youtube video</label>
        <input
          id="videoUrl"
          type="url"
          required
          {...register("videoUrl", { required: false })}
        />
        {values.videoUrl ? (
          <YoutubeVideo
            height={400}
            width={400}
            title="Exercise demo"
            urlVideo={values.videoUrl}
          />
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="tags"></label>
        <TagsSelection
          selectHandler={onTagSelection}
          preSelected={defaultValues.tags || []}
        />
      </div>
      <button type="submit">{isEdit ? "Edit" : "Add"} </button>
    </form>
  );
}
