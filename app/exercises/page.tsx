import ExerciseCard from "@/components/exercises/ExerciseCard";
import { getExercises } from "@/lib/server/services/exerciseService";
import { PAGE_SIZE } from "@/lib/utils/consts";
import Link from "next/link";

type ExercisePageProps = {
  searchParams: {
    page?: number;
  };
};

export default async function ExcercisesPage({
  searchParams,
}: ExercisePageProps) {
  const currentPage = searchParams.page || 0;

  const { records } = await getExercises(currentPage, PAGE_SIZE);

  return (
    <div className="grid grid-cols-4 p-4 gap-8">
      {records.map(({ videoUrl, _id, ...exerciseProps }) => (
        <Link href={`/exercises/${_id.toString()}`}>
          <ExerciseCard {...exerciseProps} key={_id.toString()} />
        </Link>
      ))}
    </div>
  );
}
