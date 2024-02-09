"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <p className="text-sm font-semibold">
          Signed in as {session.user.email}
        </p>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <p className="text-sm font-semibold">Not signed in</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
