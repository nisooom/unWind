"use client";
import { signIn } from "next-auth/react";
import { options } from "@/app/api/auth/[...nextauth]/options";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-center px-10 py-20 rounded-md">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2"></div>
          <div className="py-4 gap-6 flex-col flex items-center">
            {Object.values(options.providers).map((provider) => (
              <div key={provider.id}>
                <button
                  className="text-lg px-4 py-2 border flex gap-4 w-full rounded-sm justify-center items-center"
                  onClick={() =>
                    signIn(provider.id, {
                      callbackUrl: "/SignIn",
                    })
                  }
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
