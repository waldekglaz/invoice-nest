const express = require("express");
const { createInvoice } = require("../controllers/invoiceController.js");

const router = express.Router();

// Route to create a new invoice
router.post("/", createInvoice);

// Route to edit an existing invoice
router.put("/:id", (req, res) => {
  // Add your code here to edit an existing invoice
});

// Route to delete an invoice
router.delete("/:id", (req, res) => {
  // Add your code here to delete an invoice
});

module.exports = router;
