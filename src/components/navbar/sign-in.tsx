import React from "react";
import { getServerAuthSession } from "~/server/auth";
import Wrapper from "../wrapper/wrapper";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import AdminLink from "./admin";

const SignIn = async () => {
  const session = await getServerAuthSession();

  return (
    <Wrapper className="flex items-center justify-end gap-3 pt-2">
      <p>
        {session && (
          <Image
            src={session.user?.image || ""}
            alt="/"
            width={100}
            height={100}
            className="max-w-[40px] rounded-full object-cover"
          />
        )}
      </p>
      <Link href={session ? "api/auth/signout" : "api/auth/signin"}>
        <Button className="rounded-full bg-black">
          {session ? "Sign Out" : "Sign In"}
        </Button>
      </Link>
      <AdminLink />
    </Wrapper>
  );
};

export default SignIn;
