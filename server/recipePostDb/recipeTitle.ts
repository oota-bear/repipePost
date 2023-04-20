import { PrismaClient, RecipeTitle } from "@prisma/client";

const prisma = new PrismaClient();

export const dbMethod = {
  /*
    getRecipe :async (recipeId: RecipeTitle["id"]) => {
      try {
        return await prisma.recipeTitle.findFirst({
            where: {
                id: recipeId
            }
        })
      }
      catch(error:any){
        throw new Error(error);
      }
    }
    */
    getRecipe :async (recipeTitle: RecipeTitle["title"]):Promise<RecipeTitle[] | undefined> => {
      try {
         return await prisma.recipeTitle.findMany({
         })
      }
      catch(error:any){
        throw new Error(error);
      }
    },
    getRecipeAndMaterials :async() :Promise<RecipeTitle[] | undefined> => {
      try {
        return await prisma.recipeTitle.findMany({
          where: {
            id:1
          },
          include:{
            materials: true
          }
        })
      }
      catch(error:any){
        throw new Error(error);
      }
    }
}