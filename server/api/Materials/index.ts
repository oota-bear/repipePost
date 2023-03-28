import type { Materials } from "@prisma/client"

export type Methods = {
  get: {
    resBody: Materials[] | undefined
  }
  post: {
    reqBody: Materials[]
  }
}
