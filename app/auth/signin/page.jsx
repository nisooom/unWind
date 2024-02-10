"use client";
import { signIn } from "next-auth/react";
import { options } from "@/app/api/auth/[...nextauth]/options";

const SignIn = () => {
  return (
    <div>
      {Object.values(options.providers).map((provider) => (
        <div key={provider.id}>
          <button
            className="text-lg px-4 py-2 border flex gap-4 w-full rounded-sm justify-center items-center"
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: "",
              })
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SignIn;
