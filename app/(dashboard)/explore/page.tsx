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
  const webCollections = await db.webcollection.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      webmarks: true,
    },
  });
  return { webCollections };
};

const ExplorePage = () => {
  return (
    <div className="h-full overflow-y-auto pr-6 w-1/1">
      <div className="h-full items-stretch justify-center min-h-[content]">
        <div className="flex-1 grow flex">
          <Suspense fallback={<GreetingsSkeleton />}>
            <Greetings />
          </Suspense>
        </div>
        <Card className="mt-6"></Card>
      </div>
    </div>
  );
};

export default ExplorePage;
