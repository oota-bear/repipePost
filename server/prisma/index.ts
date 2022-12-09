import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const get = await prisma.recipeTitle.findUnique({
        where: {id:2}
    })
    console.log(get)

}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })