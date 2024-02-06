import { Suspense } from "react";
import Link from "next/link";

import Pagination from "@/components/ui/Pagination";
import SecuredAddButton from "@/components/ui/SecuredAddButton";

import { getPublicWorkouts } from "@/lib/server/services/workoutService";
import { PAGE_SIZE } from "@/lib/utils/consts";

type WorkoutsPageProps = {
  searchParams: {
    page?: number;
  };
};

export default async function WorkoutsPage({
  searchParams,
}: WorkoutsPageProps) {
  const page = searchParams.page ?? 0;

  const workouts = await getPublicWorkouts(page, PAGE_SIZE);

  return (
    <div>
      <SecuredAddButton href="/workouts/add" text="Add workout" />
      <Suspense>
        <ul className="flex flex-col mt-4">
          {workouts?.map((workout) => (
            <Link href={`/workouts/${workout._id.toString()}`}>
              {workout.title}
            </Link>
          ))}
        </ul>
      </Suspense>
      <Pagination currentPage={0} numberOfPages={0} />
    </div>
  );
}
