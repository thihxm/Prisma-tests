import { PrismaClient } from '@prisma/client'

const prima = new PrismaClient()

async function main() {
  const result = await prima.courses.create({
    data: {
      name: 'Curso de NodeJS',
      duration: 200,
      description: 'Curso excelente de NodeJS',
      teacher: {
        connectOrCreate: {
          where: {
            name: 'Thiago Henrique Xavier Medeiros',
          },
          create: {
            name: 'Thiago Henrique Xavier Medeiros',
          },
        },
      },
    },
  })

  console.log(result)
}

main()
