import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

const inputScale: Prisma.ScaleTypeCreateManyInput[] = [
  {
    name:"グラム",
    create_datetime: new Date(),
    update_datetime: new Date()
  },
  {
    name:"大さじ",
    create_datetime: new Date(),
    update_datetime: new Date()
  },
  {
    name:"小さじ",
    create_datetime: new Date(),
    update_datetime: new Date()
  },
  {
    name:"ml",
    create_datetime: new Date(),
    update_datetime: new Date()
  },
  {
    name:"本",
    create_datetime: new Date(),
    update_datetime: new Date()
  },
  {
    name:"個",
    create_datetime: new Date(),
    update_datetime: new Date()
  },
  {
    name:"缶",
    create_datetime: new Date(),
    update_datetime: new Date()
  },
]

const importScaleType = async () => {
  const scaleTypes = [];
  for(const t in inputScale){
    const type = await prisma.scaleType.create({
       data: {
        name:inputScale[t].name,
        create_datetime:inputScale[t].create_datetime,
        update_datetime:inputScale[t].update_datetime
       }
    })
    scaleTypes.push(type)
  }
  //console.log(scaleTypes)
}

const main = async () => {
  console.log(`Start seeding ...`)
  await importScaleType();
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
