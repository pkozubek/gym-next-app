"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Navbar() {
  const { user } = useUser();

  const isAuth = !!user;

  return (
    <div className="flex items-center justify-between bg-white p-2 shadow-md">
      <h1>
        <Link href="/">Logo</Link>
      </h1>
      <ul className="flex gap-x-4">
        {isAuth ? (
          <>
            <li>
              <Link href="/exercises/add">Add exercise</Link>
            </li>
            <li></li>
          </>
        ) : null}
        <li>
          <Link href={"/plans"}>Plans</Link>
        </li>
        <li>
          <Link href={"/exercises"}>Exercises</Link>
        </li>
        <li>
          <Link href={"/workouts"}>Workouts</Link>
        </li>
        <li>
          <Link href={"/routines"}>Routine</Link>
        </li>
      </ul>
      <div>
        <ul className="flex gap-x-4">
          {!isAuth ? (
            <>
              <li>
                <a className="button__login" href="/api/auth/login">
                  Log In
                </a>
              </li>
              <li>
                <a className="button__sign-up" href="/api/auth/signup">
                  Sign Up
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <a className="button__logout" href="/api/auth/logout">
                  Log Out
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
