import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = (props) => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleChangeHandler = (event) => {
        // onChange event.. title changes with every key stroke
        setTitle(event.target.value);
        /*
        Vanilla JS'ten geliyor bu event olayı.
        console.event

        bubbles: true
        cancelable: false
        currentTarget: null
        defaultPrevented: false
        eventPhase: 3
        isDefaultPrevented: ƒ functionThatReturnsFalse()
        isPropagationStopped: ƒ functionThatReturnsFalse()
        isTrusted: true
        nativeEvent: InputEvent {isTrusted: true, data: 'w', isComposing: false, inputType: 'insertText', dataTransfer: null, …}
        --target: input
           --> value: "w"
         */

    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value); // always be a String, even if stores a number
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        // default browser behavior--> page reloads.. sends a request. thats not we want.. manually collect.. we can disable deafult behavior.
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }

        props.savedData(expenseData);
        console.log(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label> Title </label>
                    <input
                        type="text"
                        value={title}
                        onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label> Amount </label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label> Date </label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={date}
                        onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit"> Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;