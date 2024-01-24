import { getPublicWorkoutData } from "@/lib/server/services/workoutService";

type WorkoutPageProps = {
  params: {
    workoutId: string;
  };
};

async function WorkoutPage({ params }: WorkoutPageProps) {
  const workoutData = await getPublicWorkoutData(params.workoutId);

  return <div>{JSON.stringify(workoutData)}</div>;
}

export default WorkoutPage;
