type WorkoutPageProps = {
  params: {
    workoutId: string;
  };
};

function WorkoutPage({ params }: WorkoutPageProps) {
  return <div>{params.workoutId}</div>;
}
