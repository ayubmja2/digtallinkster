import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import WebmarkCard from "@/components/WebMarkCard";

const getData = async (id) => {
  const user = await getUserFromCookie(cookies());

  const collection = await db.webcollection.findFirst({
    where: {
      id,
      userId: user?.id,
    },
    include: {
      webmarks: true,
    },
  });
  return collection;
};

export default async function WebCollectionPage({ params }) {
  const collection = await getData(params.id);
  return (
    <div className="h-full overflow-y-auto pr-6 w-1/1">
      <WebmarkCard title={collection?.title} />
    </div>
  );
}
