import express from "express"
import bodyParser from "body-parser";
import user_Route from "@/routes/user.route"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const PORT = 3001

const NODE_ENV = Bun.env.NODE_ENV
app.use(express.json())
app.use(bodyParser.json())
app.use("/user", user_Route)
app.get("/", (req, res) => {
    console.log("🟢 hii")
    res.send("Hello World!");
  });
app.post("/addUser", async (req:any, res:any) => {
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
  })

app.listen(PORT, () => {
    console.log(`Server is running on 🟢 ${NODE_ENV} Mode at port ${PORT}`);
});
