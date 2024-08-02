"use server"
import { db } from "@/db"

export const DeleteAccount = async (id: string) => {
    console.log("server id:", id)
    try {
        await db.user.delete({where:{id}})
        return {success: "account deleted"}
        
    } catch (err) {
        console.log(err)
        return {error: "Something went wrong"}
        
    }
}