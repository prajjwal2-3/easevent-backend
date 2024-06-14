import express from "express"
import bodyParser from "body-parser";
import user_Route from "@/routes/user.route"



const app = express();
app.use(express.json())
const PORT = 3001

const NODE_ENV = Bun.env.NODE_ENV

app.use("/user", user_Route)
app.get("/", (req, res) => {
    console.log("🟢 hii")
    res.send("Hello World!");
  });


app.listen(PORT, () => {
    console.log(`Server is running on 🟢 ${NODE_ENV} Mode at port ${PORT}`);
});
