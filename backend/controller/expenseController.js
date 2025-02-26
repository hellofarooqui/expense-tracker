import Expense from "../model/Expense.js";

export const getAllExpenses = async (req, res) => {
    try {
        console.log("Request reeiveed")
      const expenses = await Expense.find({ userId: req.userId });
      res.status(201).json(expenses);
    } catch (error) {
      res.status(500).json({ message: "Error fetching expenses", error: error.message });
    }
  }

export const addExpense = async (req, res) => {
    try {
      const { amount, category, date } = req.body;
      const expense = new Expense({ amount, category, date, userId: req.userId });
      await expense.save();
      res.status(201).json(expense);
    } catch (error) {
      res.status(400).json({ message: "Error adding expense", error: error.message });
    }
  }

  export const getExpenseDetails = async (req, res) => {
    try {
      const expense = await Expense.findOne(
        { _id: req.params.id, userId: req.userId },
      );
      if (!expense) return res.status(404).json({ message: "Expense not found" });
      res.json(expense);
    } catch (error) {
      res.status(400).json({ message: "Error updating expense", error: error.message });
    }
  }

  export const updatedExpense = async (req, res) => {
    try {
      const expense = await Expense.findOneAndUpdate(
        { _id: req.params.id, userId: req.userId },
        req.body,
        { new: true }
      );
      if (!expense) return res.status(404).json({ message: "Expense not found" });
      res.json(expense);
    } catch (error) {
      res.status(400).json({ message: "Error updating expense", error: error.message });
    }
  }

  export const deleteOneExpense = async (req, res) => {
    try {
      const expense = await Expense.findOneAndDelete({ _id: req.params.id, userId: req.userId });
      if (!expense) return res.status(404).json({ message: "Expense not found" });
      res.json({ message: "Expense deleted" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting expense", error: error.message });
    }
  }