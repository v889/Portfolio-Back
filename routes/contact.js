import express from "express";
import { newcontact } from "../controller/contact.js";
const router = express.Router();

router.post("/new",newcontact);

export default router;