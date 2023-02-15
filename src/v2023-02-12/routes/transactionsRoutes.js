const express = require("express");
const router = express.Router();
const transactionsController = require("../controllers/transactionsController");

// Routes
router.get("/:transactionId", transactionsController.getTransactionDetail)

module.exports = router;