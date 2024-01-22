"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { PiSignOut } from "react-icons/pi";

const SignIn = () => {
  const { data, status } = useSession();
  return (
    <div className="flex flex-row gap-2 text-white">
      {status === "authenticated" ? (
        <h3 onClick={() => signOut()}>Sign out</h3>
      ) : (
        <h3 onClick={() => signIn("google")}>Sign in</h3>
      )}{" "}
      <PiSignOut size={30} />
    </div>
  );
};

export default SignIn;
