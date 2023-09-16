import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function handler(req, res) {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);

  await db.webmark.update({
    where: {
      id: req.body.id,
    },
    data: {
      title: req.body.title,
      url: req.body.url,
      description: req.body.description,
    },
  });
  res.json({ data: { message: "success" } });
}
