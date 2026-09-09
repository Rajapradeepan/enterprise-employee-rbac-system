import express from "express";
import { login } from "../../controller/auth/auth.controller.js";

const authRoutes = express.Router();

authRoutes.get("/login", login);

export default authRoutes;