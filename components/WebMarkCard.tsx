import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import Button from "./Button";
import Card from "./Card";

const getData = async () => {
  const user = await getUserFromCookie(cookies());
  const marks = await db.webmark.findMany({
    where: {
      userId: user?.id,
    },
  });
  return marks;
};

const WebmarkCard = async ({ title }) => {
  const data = await getData();

  return (
    <Card>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-3xl text-gray-600">{title}</span>
        </div>
        <div>
          <Button intent="text" className="text-blue-600">
            + Create New
          </Button>
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
