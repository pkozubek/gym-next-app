import Loader from "@/components/ui/Loader";
import { getUserProfileData } from "@/lib/server/services/authService";
import { getPublicWorkouts } from "@/lib/server/services/workoutService";
import { PAGE_SIZE } from "@/lib/utils/consts";
import Link from "next/link";
import { Suspense } from "react";

type WorkoutsPageProps = {
  searchParams: {
    page?: number;
  };
};

export default async function WorkoutsPage({
  searchParams,
}: WorkoutsPageProps) {
  const page = searchParams.page ?? 0;

  const user = await getUserProfileData();

  const workouts = await getPublicWorkouts(page, PAGE_SIZE);

  return (
    <div>
      <Suspense fallback={<Loader />}>
        {!!user && <Link href={"/workouts/add"}>Add</Link>}
      </Suspense>
      <Suspense>
        <ul className="flex flex-col mt-4">
          {workouts.map((workout) => (
            <Link href={`/workouts/${workout._id.toString()}`}>
              {workout.title}
            </Link>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}
