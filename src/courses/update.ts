import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const firstCourse = await prisma.courses.findFirst()

  const result = await prisma.courses.update({
    where: {
      id: firstCourse.id,
    },
    data: {
      duration: 250,
      description: 'Super Curso de NodeJS',
    },
  })

  console.log(result)
}

main()
