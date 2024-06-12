import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const newuser = await prisma.user.create({
  data:{
    username:'vaibhtetyrtykhav656t',
    firstName:'verhetytjyhggav',
    lastName:'shaithryjrtyjethbnkrma',
    email:'vaibthrtntytjyythrhav@45'
  }
})

console.log(newuser)

const alluser = await prisma.user.findMany()
console.log(alluser.length)