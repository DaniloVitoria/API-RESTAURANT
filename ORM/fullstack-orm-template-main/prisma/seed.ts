import { prisma } from "@/prisma";



async function seed() {
    await prisma.user.createMany({
        data: [
            {
                name: "Rodrigo",
                email: "rodrigo@gmail.com",
            },
            {
                name: "Allan",
                email: "Allan@gmail.com",
            }
        ],
    })
}


seed().then( () => {
    console.log("Database seeded!")
    prisma.$disconnect()
}) 



