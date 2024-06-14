import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const add_Event = async (req: any, res: any) => {
  console.log("Request Body:", req.body);
  const {
    title,
    description,
    imageUrl,
    startDateTime,
    endDateTime,
    price,
    isFree,
    authorId,
    categoryId,
    url,
    venue,
  } = req.body;
  try {
    const newEvent = await prisma.event.create({
      data: {
        title,
        description,
        imageUrl,
        startDateTime,
        endDateTime,
        price,
        isFree,
        authorId,
        categoryId,
        url,
        venue,
      },
    });

    return res
      .status(200)
      .json({ message: "Event created successfully", Event: newEvent });
  } catch (error) {
    return res.status(501).json(error);
  }
};

export const delete_all_Event = async (req: any, res: any) => {
  console.log("Request Body:", req.body);
  try {
    const deleted = await prisma.event.deleteMany({});
    return res.status(200).json({ message: "all Events deleted successfully" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const delete_Event = async (req: any, res: any) => {
  console.log("Request Body:", req.body);
  const { id } = req.body;
  try {
    const deletedEvent = await prisma.event.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    return res.status(501).json(error);
  }
};
