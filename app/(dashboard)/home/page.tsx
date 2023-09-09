import Image from "next/image";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import Link from "next/link";
import { cookies } from "next/headers";
import NewWebCollection from "@/components/newWebCollection";
import CollectionCard from "@/components/CollectionCard";

const getData = async () => {
  const user = await getUserFromCookie(cookies());
  const webCollection = await db.webcollection.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      webmarks: true,
    },
  });
  return webCollection;
};

export default async function Home() {
  const webCollections = await getData();
  return (
    <div className="h-full overflow-y-auto pr-6 w-1/1">
      <div className=" h-full  items-stretch justify-center min-h-[content]">
        <div className="flex-1 grow flex">
          {/* <Suspense fallback={<GreetingsSkeleton />}>
            <Greetings />
          </Suspense> */}
        </div>
        <div className="flex flex-2 grow items-center flex-wrap mt-3 -m-3 ">
          {webCollections.map((collection) => (
            <div className="w-1/3 p-3" key={collection.id}>
              <Link href={`/webcollection/${collection.id}`}>
                <CollectionCard webcollection={collection} />
              </Link>
            </div>
          ))}

          <div className="w-1/3 p-3">
            <NewWebCollection />
          </div>
        </div>
        <div className="mt-6 flex-2 grow w-full flex">
          <div className="w-full">{/* <TaskCard /> */}</div>
        </div>
      </div>
    </div>
  );
}
