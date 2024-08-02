"use server";
import { db } from "@/db";

export const updateRole = async (id: string, role: any) => {
    await db.user.update({where:{id}, data:{role}})
    return {success: "updated role"}
}
