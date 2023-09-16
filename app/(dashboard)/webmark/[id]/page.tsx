import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
import { db } from "@/lib/db";

const getData = async (id) => {
  const user = await getUserFromCookie(cookies());

  const webmark = await db.webmark.findFirst({
    where: {
      id,
      userId: user?.id,
    },
  });
  return webmark;
};
export default async function WebMarkPage({ params }) {
  const webmark = await getData(params.id);
  return (
    <div className="h-full overflow-y-auto pr-6 w-1/1">
      <h1>
        Hello, {webmark?.title}, {webmark?.url}, your id is: {webmark?.id},
      </h1>
      {/* Create nice look interface */}
      {/* Step is to allow the user to update the information or delete */}
    </div>
  );
}
