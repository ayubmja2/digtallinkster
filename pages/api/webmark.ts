import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function handler(req, res) {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);

  await db.webmark.create({
    data: {
      title: req.body.title,
      url: req.body.url,
      webcollectionId: req.body.id,
      userId: user.id,
    },
  });
  res.json({ data: { message: "hi" } });
}
