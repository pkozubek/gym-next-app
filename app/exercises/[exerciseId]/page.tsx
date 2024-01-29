import { GetExerciseById } from "@/lib/server/services/exerciseService";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

type ExcersiePageProps = {
  params: {
    exerciseId: string;
  };
};

export default async function ExcersiePage({ params }: ExcersiePageProps) {
  const data = await GetExerciseById(params.exerciseId);

  return (
    <div>
      <div className="w-full p-4 flex justify-between bg-green-100">
        <h3>{data?.title}</h3>
        <Link href={`/exercises/edit/${params.exerciseId}`}>
          <FaEdit />
        </Link>
      </div>
    </div>
  );
}
