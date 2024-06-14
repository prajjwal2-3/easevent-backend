import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const add_Category = async (req: any, res: any) => {
  console.log("Request Body:", req.body);
  const { name } = req.body;
  try {
    const newCategory = await prisma.category.create({
      data: {
        name,
      },
    });

    return res.status(200).json({
      message: "Category created successfully",
      Category: newCategory,
    });
  } catch (error) {
    res.status(501).json(error);
  }
};
