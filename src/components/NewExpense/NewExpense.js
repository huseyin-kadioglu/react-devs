import React from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    // communicating with the child from the parent
    const saveDateHandler = (data) => {
        
        console.log("savingDateHandler");

        const expenseData = {
            ...data,
            id: Math.random().toString()
        };

        console.log(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm savedData={saveDateHandler}/>
        </div>
    )
};
export default NewExpense;