import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
import Button from "./Button";
import Card from "./Card";
import NewWebCollection from "./newWebCollection";
const getData = async () => {
  const user = await getUserFromCookie(cookies());
  return user;
};

const Greetings = async () => {
  const user = await getData();

  return (
    <Card className="w-full py-4 relative">
      <div className="mb-4">
        <h1 className="text-3xl text-gray-700 font-bold mb-4">
          Hello, {user.firstName}!
        </h1>
        <h4 className="text-xl text-gray-400">Checkout the Web</h4>
      </div>
      <div>{/* <Button size="large">Today's Schedule</Button> */}</div>
    </Card>
  );
};

export default Greetings;
