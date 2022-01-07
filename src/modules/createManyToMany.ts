import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: '3e0aa972-39e8-402b-b91f-41ea3194129c',
      fk_id_module: '2003a82b-1527-449f-8a13-a5a6cecdbd78',
    },
  })

  console.log(result)
}

main()
