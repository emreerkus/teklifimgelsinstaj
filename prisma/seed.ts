import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const allUsers = await prisma.ratio.findMany({
    where: {
      price: 100000
    }
  })
  console.log(allUsers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })