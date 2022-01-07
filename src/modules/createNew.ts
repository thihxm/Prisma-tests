import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          duration: 200,
          name: 'Curso de ReactJS',
          description: 'Super curso de ReactJS',
          teacher: {
            create: {
              name: 'O Professor de testes',
            },
          },
        },
      },
      module: {
        create: {
          name: 'Next.js',
          description: 'Curso completo de Next.js',
        },
      },
    },
  })

  console.log(result)
}

main()
