import { auth } from "@/auth";
import { db } from "@/db";

   export const getNameSession = async (userId: string | null) => {
    let name: string | null;
    try {
      if (userId) {
        const data = await db.user.findFirst({ where: { id: userId } });
        if (data && data.firstName) {
          name = data.firstName;
          return name;
        }
        return null;
      }
      return null;
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  export const getSessionId = async () => {
    const session = await auth();
    if (!session || !session.user || !session.user.id ) return null;
    return session.user.id;
  };