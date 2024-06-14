import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const add_Event = async(req:any, res:any)=>{
    console.log('Request Body:', req.body); 
    const {title,description,imageUrl,startDateTime,endDateTime,price,isFree,authorId,categoryId,url} = req.body
   try{
    const newEvent = await prisma.event.create({
        data:{
            title,
            description,
            imageUrl,
            startDateTime,
            endDateTime,
            price,
            isFree,
            authorId,
            categoryId,
            url
        }
    })

    return res.status(200).json({ message: 'Event created successfully', Event: newEvent });
   }catch(error){
    return res.status(501).json(error)
   }
}