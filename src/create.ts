import { PrismaClient } from '@prisma/client'

const prima = new PrismaClient()

async function main() {
  const result = await prima.courses.create({
    data: {
      duration: 200,
      name: 'Curso de NodeJS',
      description: 'Curso excelente de NodeJS',
    },
  })

  console.log(result)
}

main()