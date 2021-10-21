import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../util/Card";
import {useState} from "react";

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const changeTitleHandler = () => {
            setTitle("updatedTitle");
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={changeTitleHandler}> Change Title</button>
        </Card>
    );
};
export default ExpenseItem;