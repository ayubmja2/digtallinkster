import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function handler(req, res) {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);

  await db.webmark.delete({
    where: {
      id: req.body.id,
    },
  });
  res.json({ data: { message: "success" } });
}
