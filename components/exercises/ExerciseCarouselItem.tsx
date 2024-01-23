"use client";

import { useDrag } from "react-dnd";
import YoutubeVideo from "../YoutubeVideo";
import { ExcerciseLeanDTO } from "@/lib/types/Excercise";

type ExerciseCarouselItemWithVideoInfo = ExcerciseLeanDTO & {
  isVideoOpen: boolean;
  toggleVideo: (id: string) => void;
  successfullDropFn: () => void;
};

export default function ExerciseCarouselItem({
  videoUrl,
  title,
  _id,
  isVideoOpen,
  imageUrl,
  toggleVideo,
  successfullDropFn,
}: ExerciseCarouselItemWithVideoInfo) {
  const onToggleClick = () => {
    toggleVideo(_id.toString());
  };

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "exercise",
    item: { name: _id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<{ name: string }>();
      if (item && dropResult) {
        successfullDropFn();
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging ? "opacity-25" : "opacity-100";

  return (
    <div className={opacity} ref={dragRef}>
      {isVideoOpen ? (
        <YoutubeVideo
          height={300}
          width={300}
          title={`video-${_id.toString()}`}
          urlVideo={videoUrl}
        />
      ) : (
        <img src={imageUrl} className="h-60 w-full" />
      )}
      <div onClick={onToggleClick}>Open/hide video</div>
      <div className="">{title}</div>
    </div>
  );
}
