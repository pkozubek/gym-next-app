"use client";

import { Tags } from "@/lib/types/Excercise";
import { useEffect, useState } from "react";

const tagsValues = Object.values(Tags);

type TagsSelectionProps = {
  selectHandler?: (value: Tags[]) => void;
  preSelected?: Tags[];
};

export default function TagsSelection({
  selectHandler,
  preSelected,
}: TagsSelectionProps) {
  const [selectedTags, setSelectedTags] = useState(preSelected || []);

  const onTagSelection = (value: Tags) => {
    if (selectHandler) {
      setSelectedTags((currentTags) => {
        if (currentTags.includes(value)) {
          return [...currentTags.filter((tag) => tag !== value)];
        } else {
          return [...currentTags, value];
        }
      });
    }
  };

  useEffect(() => {
    if (selectHandler) selectHandler(selectedTags);
  }, [selectedTags]);

  return (
    <div className="flex gap-x-1 cursor-pointer">
      {tagsValues.map((tag) => (
        <div
          key={tag}
          onClick={() => onTagSelection(tag)}
          className={`border-solid border-2 border-gray-200 rounded-lg px-2 py-1 ${
            selectedTags.includes(tag)
              ? "bg-green-500 text-white"
              : "bg-transparent text-green-500"
          }`}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}
