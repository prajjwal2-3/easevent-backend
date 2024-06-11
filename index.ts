import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const newuser = await prisma.user.create({
  data:{
    username:'vaibhav65',
    firstName:'vaibhav',
    lastName:'sharma',
    email:'vaibhav@45'
  }
})

console.log(newuser)

const alluser = await prisma.user.findMany()
console.log(alluser)