import { PrismaClient } from "@prisma/client"

const prima = new PrismaClient()

async function main() {
  const course = await prima.courses.findFirst({
    take: -1,
  })
  
  console.log(course)
}

main()