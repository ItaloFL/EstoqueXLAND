import { prisma } from '../prisma/client'
import { hash } from 'bcryptjs'

async function seed() {
  await prisma.user.create({
    data: {
      username: 'JoaoVictor',
      password: await hash('JoaoVictor123', 8),
      isAdmin: true
    }
  })

  await prisma.user.create({
    data: {
      username: 'Alice',
      password: await hash('Alice123', 8),
      isAdmin: false
    }
  })

  await prisma.user.create({
    data: {
      username: 'Jeferson',
      password: await hash('Jeferson123', 8),
      isAdmin: false
    }
  })

  await prisma.user.create({
    data: {
      username: 'Raimundo',
      password: await hash('Raimundo123', 8),
      isAdmin: false
    }
  })

  await prisma.user.create({
    data: {
      username: 'Alberto',
      password: await hash('Alberto123', 8),
      isAdmin: true
    }
  })
}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
