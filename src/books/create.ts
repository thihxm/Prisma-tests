import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.books.create({
    data: {
      name: 'Arquitetura limpa',
      author_id: '98856f10-0860-4b28-973d-a874343fd7e5',
    },
  })

  console.log(result)
}

main()
