import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import Button from "./Button";
import Card from "./Card";
import NewWebMark from "./newWebMark";
import Link from "next/link";
const getData = async () => {
  const user = await getUserFromCookie(cookies());

  const webmarks = await db.webmark.findUnique({
    where: {
      id: user?.id,
    },
  });
  return webmarks;
};

const WebmarkCard = async ({ title, id, webmarks }) => {
  const data = webmarks || (await getData());
  // console.log("webmarkcard" + typeof id); //string here
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-3xl text-gray-600">{title}</span>
        </div>
        <div>
          <NewWebMark webcollectionId={id} />
        </div>
      </div>
      <div>
        {data && data.length ? (
          <div>
            {data.map((mark) => (
              <div
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-6"
                key={mark.id}
              >
                <div className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg">
                  <span className="text-gray-800">
                    <Link className="ml-6" href={`/webmark/${mark.id}`}>
                      {mark.title}
                    </Link>
                  </span>
                </div>

                <div className="flex flex-col justify-between p-4 leading-normal">
                  <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Link
                      className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                      href={mark.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {mark.title}
                    </Link>
                  </span>
                </div>

                <div className="">
                  <span className="text-gray-400 text-sm">
                    {mark.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>no marks</div>
        )}
      </div>
    </Card>
  );
};

export default WebmarkCard;
