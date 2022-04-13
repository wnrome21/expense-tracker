import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
      <Card className="expenses">
        <ExpensesFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler} 
        />
        <ExpensesChart expenses={filteredExpenses} />
        {filteredExpenses.length === 0 ? (
        <h3 className="expenses">No Expenses Found</h3>
        ) : (
          filteredExpenses.map((expense) => (
        <ExpenseItem 
          key={expense.id}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date} 
        />
        ))
      )}
      </Card>
  );
};

export default Expenses;
