const Invoice = require("../models/Invoice");

// Create new invoice
exports.createInvoice = async (req, res) => {
  const {
    dueDate,
    items,
    projectDescription,
    totalAmount,
    clientName,
    clientEmail,
    clientStreetAddress,
    clientCity,
    clientPostCode,
  } = req.body;
  try {
    const invoice = new Invoice({
      dueDate,
      items,
      projectDescription,
      totalAmount,
      clientName,
      clientEmail,
      clientStreetAddress,
      clientCity,
      clientPostCode,
    });
    await invoice.save();
    res.json(invoice);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Get all invoices for logged in user
exports.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({ user: req.user.id });
    res.json(invoices);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Get single invoice by ID
exports.getInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ msg: "Invoice not found" });
    }
    if (invoice.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    res.json(invoice);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
// Get all invoices for logged in user
exports.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({ user: req.user.id });
    res.json(invoices);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Create new invoice
exports.createInvoice = async (req, res) => {
  const {
    dueDate,
    items,
    projectDescription,
    totalAmount,
    clientName,
    clientEmail,
    clientStreetAddress,
    clientCity,
    clientPostCode,
  } = req.body;
  try {
    const invoice = new Invoice({
      dueDate,
      items,
      projectDescription,
      totalAmount,
      clientName,
      clientEmail,
      clientStreetAddress,
      clientCity,
      clientPostCode,
      user: req.user.id,
    });
    await invoice.save();
    res.json(invoice);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
