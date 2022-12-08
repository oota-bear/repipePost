import { init } from '$/service/app'
import { API_SERVER_PORT } from '$/service/envValues'
import { PrismaClient } from '@prisma/client'

const app = init()
app.listen(API_SERVER_PORT)


