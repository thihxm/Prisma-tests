import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: 'Thiago Medeiros',
      books: {
        createMany: {
          data: [{ name: 'Esse livro teste' }, { name: 'Outro livro top' }],
        },
      },
    },
  })

  console.log(result)
}

main()
