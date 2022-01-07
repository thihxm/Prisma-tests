import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.modules.create({
    data: {
      description: 'Iniciando o servidor',
      name: 'Introdução ao express',
      coursesModules: {
        create: {
          course: {
            connect: {
              id: '3e0aa972-39e8-402b-b91f-41ea3194129c',
            },
          },
        },
      },
    },
  })

  console.log(result)
}

main()
