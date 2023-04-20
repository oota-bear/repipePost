import type { RecipeTitle } from "@prisma/client"

export type Methods = {
  get: {
    params: string
    resBody: RecipeTitle[] | undefined
  }
}
