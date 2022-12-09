import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

async function main() {
  const test = await prisma.recipeTitle.create({
    data: {
      title:'test',
      create_datetime:new Date('2022-12-08 19:56:47'),
      update_datetime:new Date('2022-12-08 19:56:47')
    }
  })

  const task2 = await prisma.recipeTitle.create({
    data: {
      title:'test',
      create_datetime:new Date('2022-12-08 19:56:47'),
      update_datetime:new Date('2022-12-08 19:56:47')
    }
  })

  console.log({ test, task2 })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
