import { React } from "react";
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData,
            id: Math.random().toString(),
        }

        props.onAddExpense(expenseData);

        console.table(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;
