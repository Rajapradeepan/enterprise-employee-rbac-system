import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mainRoutes from "./src/routes/mainRoutes.js";

dotenv.config();

const app = express();

app.use(cors("*"));

app.get("/", (req, res) => {
    res.json({ message: "Project is running" });
});

app.use("/api", mainRoutes);

app.listen(process.env.PORT, ()=> {
    console.log("Server is running in ......", process.env.PORT);
});