import ExerciseAddEditForm from "@/components/exercises/ExerciseAddEditForm";
import editExercise from "@/lib/server/serverActions/editExercise";
import { GetExerciseById } from "@/lib/server/services/exerciseService";
import { ExcerciseDTO } from "@/lib/types/Excercise";

type ExcersiePageProps = {
  params: {
    exerciseId: string;
  };
};

export default async function EditExcercise({ params }: ExcersiePageProps) {
  const data = await GetExerciseById(params.exerciseId);

  if (!data) {
    return null;
  }

  const { _id, ...rest } = data;

  return (
    <ExerciseAddEditForm exerciseId={params.exerciseId} defaultValues={rest} />
  );
}
