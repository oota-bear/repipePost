import { defineController } from './$relay'
import { getRecipe } from '$/service/recipeTitle'

export default defineController(() => ({
  get: async({params}) => ({
    status: 200, body: await getRecipe(params.title) }),
}))
