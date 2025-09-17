const Expense = require(expense-tracker-backend);

// GET all expenses
export async function getExpenses(req, res) {
  const expenses = await Expense.find();
  res.json(expenses);
}

// POST new expense
export async function addExpense(req, res) {
  const newExpense = new Expense(req.body);
  const saved = await newExpense.save();
  res.status(201).json(saved);
}

// DELETE expense
export async function deleteExpense(req, res) {
  await Expense.findByIdAndDelete(req.params.id);
  res.status(204).send();
}