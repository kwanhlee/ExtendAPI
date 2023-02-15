const express = require("express");
const router = express.Router();
const virtualcardsController = require("../controllers/virtualcardsController");

// Routes
router.get("/", virtualcardsController.getAllVirtualCards);
router.get("/:cardId/transactions", virtualcardsController.getTransactionsForVirtualCard);

module.exports = router;