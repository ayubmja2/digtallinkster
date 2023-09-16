import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import UpdateWebMark from "@/components/UpdateWebMark";
import Card from "@/components/Card";

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
      {/* Create nice look interface */}
      <Card>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl text-gray-600">{webmark?.title}</span>
          </div>
          <div>
            <UpdateWebMark webmarkId={webmark?.id} />
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-6">
            <div className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg">
              <span className="text-gray-800">
                <a
                  className="ml-6"
                  href={webmark?.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {webmark?.title}
                </a>
              </span>
            </div>

            <div className="flex flex-col justify-between p-4 leading-normal">
              <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                  href={webmark?.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {webmark?.url}
                </a>
              </span>
              <p className="text-gray-700 dark:text-gray-400">
                {webmark?.description}
              </p>
            </div>
          </div>
        </div>
      </Card>
      {/* Step is to allow the user to update the information or delete */}
    </div>
  );
}
