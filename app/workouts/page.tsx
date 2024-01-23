"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function WorkoutsPage() {
  const { user } = useUser();
  return <div>{!!user && <Link href={"/workouts/add"}>Add</Link>}</div>;
}
