import type { RecipeTitle } from "@prisma/client"

export type Methods = {
  get: {
    resBody: RecipeTitle[] | undefined
  }
}
