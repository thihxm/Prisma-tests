import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: '2d78baa4-8efd-4c1d-8d09-6256b8e593af',
    },
  })

  console.log(result)
}

main()
