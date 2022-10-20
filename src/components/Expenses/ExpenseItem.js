import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const [newTitle, setNewTitle] = useState("");

    const [title, setTitle] = useState(props.title);  // returns array 
    //      var     function to change variable
    const clickHandler = () => {
        setTitle(newTitle);
    }

    const changeHandler = (event) => {
        setNewTitle(event.target.value);
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
