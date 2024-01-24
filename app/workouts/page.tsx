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

  console.log(workouts[0].exercises);

  return (
    <div>
      <Suspense fallback={<Loader />}>
        {!!user && <Link href={"/workouts/add"}>Add</Link>}
      </Suspense>
    </div>
  );
}
