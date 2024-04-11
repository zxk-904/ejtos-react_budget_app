import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, totalExpenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [error, setError] = useState(null);
    const currencySymbols = {
        dollars: '$',
        pounds: '£',
        euro: '€',
        rupee: '₹',
    };

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    const submitBudgetChange = (event) => {
        event.preventDefault();
        //const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
        
        if (newBudget > 20000) {
            setError('The budget cannot be greater than 20000');
            return;
        }
        if (newBudget < totalExpenses) {
            setError('The budget cannot be less than total expenses');
            return;
        }
        dispatch({ type: 'SET_BUDGET', payload: Number(newBudget) });
        setError(null); // clear any previous error
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currencySymbols[currency]}{budget}</span>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={submitBudgetChange}>
                <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
                <button type="submit">Update Budget</button>
            </form>
        </div>
    );
};

export default Budget;