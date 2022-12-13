import { defineController } from './$relay'
import {getScaleType} from '$/service/scaleType';

export default defineController(() => ({
  get: async() => ({ status: 200, body: await getScaleType()})
}))
