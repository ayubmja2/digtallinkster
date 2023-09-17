import Image from "next/image";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import Link from "next/link";
import { cookies } from "next/headers";
import Greetings from "@/components/Greeting";
import { Suspense } from "react";
import GreetingsSkeleton from "@/components/GreetingsSkeleton";
import Card from "@/components/Card";

const getData = async () => {
  const user = await getUserFromCookie(cookies());
  const theuser = await db.user.findUnique({
    where: {
      id: user?.id,
    },
  });
  return theuser;
};

const ProfilePage = async () => {
  const data = await getData();
  return (
    <div className="h-full overflow-y-auto pr-6 w-1/1">
      <div className="h-full items-stretch justify-center min-h-[content]">
        <div className="flex-1 grow flex">
          <Suspense fallback={<GreetingsSkeleton />}>
            <Greetings />
          </Suspense>
        </div>
        <Card className="mt-6">
          <div>
            <h2>Edit user info</h2>
            <div>
              <h3 className="text-xl font-bold">
                Email: <span className="text-lg">{data?.email}</span>
              </h3>
              <h3 className="text-xl font-bold">
                Password: <span className="text-lg">****</span>
              </h3>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default ProfilePage;
