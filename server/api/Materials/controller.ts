import { defineController } from './$relay'
import { registMaterials, getMaterials } from '$/service/Materials'

export default defineController(() => ({
  get: async() => ({ status: 200, body: await getMaterials() }),
  post: async({ body }) => ({ status:201, body: await registMaterials(body) })
}))
