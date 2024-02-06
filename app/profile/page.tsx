"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfilePage() {
  const user = useUser();

  return <div>{user.user?.email}</div>;
}
