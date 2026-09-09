import express from "express";
import { getDashboardData } from "../../controller/dashboard/dashboard.controller.js";

const dashRoutes = express.Router();

dashRoutes.get("/getDashboardData", getDashboardData);

export default dashRoutes;