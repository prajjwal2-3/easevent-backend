import express from "express"
import bodyParser from "body-parser";
import user_Route from "@/routes/user.route"
import event_Route from "@/routes/event.route"
import category_Route from "@/routes/category.route"

const app = express();
app.use(express.json())
const PORT = 3001

const NODE_ENV = Bun.env.NODE_ENV

app.use("/user", user_Route)
app.use("/category",category_Route)
app.use("/event",event_Route)
app.get("/", (req, res) => {
    console.log("🟢 hii")
    res.send("Hello World!");
  });


app.listen(PORT, () => {
    console.log(`🟢 Server is running at port ${PORT}`);
});
