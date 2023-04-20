import { RecipeTitle} from "@prisma/client";
import { dbMethod} from "$/recipePostDb/recipeTitle";

/*
export const getRecipe = async(recipeTitleId: RecipeTitle["id"]) => {
    await dbMethod.getRecipe(recipeTitleId)
}
*/
export const getRecipe = async(recipeTitle: RecipeTitle["title"]):Promise<RecipeTitle[] | undefined> => {
    return await dbMethod.getRecipe(recipeTitle)
}

export const getRecipeAndMaterials = async():Promise<RecipeTitle[] | undefined> => {
    return await dbMethod.getRecipeAndMaterials()
}