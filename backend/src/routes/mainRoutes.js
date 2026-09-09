import express from "express";
import authRoutes from "./auth/auth.route.js";
import dashRoutes from "./dashboard/dashboard.route.js";

const mainRoutes = express.Router();

mainRoutes.use("/auth", authRoutes);

mainRoutes.use("/dashboard", dashRoutes);

export default mainRoutes;