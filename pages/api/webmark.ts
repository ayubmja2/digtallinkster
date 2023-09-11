import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function handler(req, res) {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);
  const mark = await db.webcollection.findUnique({
    where: {
      id: req.body.webcollectionId,
    },
  });
  await db.webmark.create({
    data: {
      title: req.body.title,
      url: req.body.url,
      userId: user.id,
      webcollectionId: webcollectionId,
    },
  });
  res.json({ data: { message: "hi" } });
}
