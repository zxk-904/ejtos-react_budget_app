import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const currencySymbols = {
        dollars: '$',
        pounds: '£',
        euro: '€',
        rupee: '₹',
    };

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currencySymbols[currency]}{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
