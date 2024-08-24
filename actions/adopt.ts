"use server"
import * as z from "zod";
import { adoptionSchema } from "@/schemas";
import { db } from "@/db";
import { sendAdminAdoptingEmail, sendUserAdoptingEmail } from "@/lib/mail";


export const adopt = async (values: z.infer<typeof adoptionSchema>, animalId:string, animalName:string, animalImage: string) => {
    const validateFields = adoptionSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid Fields!" };
  }
  const {
    firstName,
    secondName,
    email,
    country,
    codeNumber,
    number,
    address,
  } = validateFields.data;

  try {
    await db.adoption.create({
        data:{
            firstName,
            secondName,
            email,
            country,
            codeNumber,
            number,
            address,
            animalId,
            animalName,
            status: "pending"
        }
      })

      

      await sendUserAdoptingEmail(email, animalName, animalImage, firstName)
      await sendAdminAdoptingEmail(animalName, animalId, firstName, secondName, email, country,codeNumber, number, address)


      return {success: "Application Sent"}
    
  } catch (error) {
     return{error: "Something went wrong!"}
    
  }


    
}