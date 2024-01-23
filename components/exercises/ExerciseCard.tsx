import Card from "../ui/Card";
import { ExcerciseWithoutVideo } from "@/lib/types/Excercise";

export default function ExerciseCard({
  description,
  imageUrl,
  tags,
  title,
}: ExcerciseWithoutVideo) {
  return (
    <Card>
      <div>
        <img
          className="blur-sm group-hover:blur-none w-full object-cover h-32 rounded-t-lg"
          src={imageUrl}
        />
      </div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{tags?.map((tag) => `${tag};`) ?? null}</div>
    </Card>
  );
}
