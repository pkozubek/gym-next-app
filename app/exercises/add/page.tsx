"use client";
import { ChangeEvent, useRef, useState } from "react";

import TagsSelection from "@/components/TagsSelection";
import YoutubeVideo from "@/components/YoutubeVideo";

import { Tags } from "@/lib/types/Excercise";
import { addExercise } from "@/lib/server/serverActions/addExercise";

const tagsValues = Object.values(Tags);

export default function ExcerciseAddPage() {
  const [videoUrl, setVideoUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const refForm = useRef<null | HTMLSelectElement>(null);

  const onTagSelection = (value: Tags) => {
    if (refForm.current) {
      const options = refForm.current.options;

      for (let i = 0; i < options.length; i++) {
        const option = options[i];

        if (option.value === value.toString()) {
          option.selected = !option.selected;
        }
      }
    }
  };

  const onVideoUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(e.target.value);
  };

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  return (
    <form action={addExercise}>
      <div className="mb-4">
        <label htmlFor="title">Name of Exercise</label>
        <input id="title" type="text" name="title" required />
      </div>
      {imageUrl ? (
        <img src={imageUrl} alt="Exercise image" width={460} height={480} />
      ) : null}
      <div className="mb-4">
        <label htmlFor="imageUrl">Image url</label>
        <input
          id="imageUrl"
          type="url"
          name="imageUrl"
          required
          onChange={onImageChange}
          value={imageUrl}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          className="resize-none"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="videoUrl">Youtube video</label>
        <input
          id="videoUrl"
          type="url"
          name="videoUrl"
          required
          value={videoUrl}
          onChange={onVideoUrlChange}
        />
        {videoUrl ? (
          <YoutubeVideo
            height={400}
            width={400}
            title="Exercise demo"
            urlVideo={videoUrl}
          />
        ) : null}
      </div>
      <div className="mb-4">
        <select className="hidden" name="tags" multiple ref={refForm}>
          {tagsValues.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <label htmlFor="tags"></label>
        <TagsSelection selectTag={onTagSelection} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}
