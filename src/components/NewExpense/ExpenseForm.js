import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //  const [userInput, setUserInput] = useState ({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control"></div>
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control"></div>
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control"></div>
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          CANCEL
        </button>
        <button type="submit">ADD EXPENSE</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
