import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import Button from "./Button";
import Card from "./Card";
import NewWebMark from "./newWebMark";

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
          <span className="text-3xl text-gray-600">
            {title}
          </span>
        </div>
        <div>
          <NewWebMark webcollectionId={id} />
        </div>
      </div>
      <div>
        {data && data.length ? (
          <div>
            {data.map((mark) => (
              <div className="py-2 " key={mark.id}>
                <div>
                  <span className="text-gray-800">{mark.title}</span>
                </div>
                <div>
                  <span className="text-gray-800">{mark.url}</span>
                </div>
                <div>
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
