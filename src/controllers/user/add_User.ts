
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const add_User = async (req:any, res:any) => {
  console.log('Request Body:', req); 
  const { email, firstName, lastName, username, photo } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        username,
        photo,
      },
    });

    return res.status(200).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const find_User = async (req:any,res:any)=>{
  console.log('Request Body:', req.body); 
  const { username } = req.body;
  console.log('Username:', username); 
  try{
    const user = await prisma.user.findUnique({
      where:{
        username
      }
    })
    return res.status(200).send("user found "+ user );
  }catch(error){
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
