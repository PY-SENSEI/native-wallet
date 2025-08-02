import express from "express";
import { sql } from "../config/db.js";
import {  createTransaction, deleteTranscation, getSummaryByUserId, getTransactionsByUserId } from "../controllers/transactionsController.js";

const router = express.Router();

router.get("/:userId", getTransactionsByUserId);

router.post("/", createTransaction);

router.delete("/:id", deleteTranscation);

router.get("/summary/:userId", getSummaryByUserId);

export default router;