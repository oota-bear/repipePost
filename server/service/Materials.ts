import { dbMethod } from "$/recipePostDb/materials";
import { Materials } from "@prisma/client";

export const registMaterials = async (materials: Materials[]) => {
    await dbMethod.registMaterials(materials)
}

export const getMaterials = async ():Promise<Materials[]> => {
   return await dbMethod.getMaterials()
}