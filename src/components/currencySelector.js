import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    }

    return (
        <div style={{ backgroundColor: '#90EE90', color: 'white', padding: '10px', borderRadius: '10px' }}>
            <label for="currency">Currency: </label>
            <select id="currency" value={currency} onChange={handleCurrencyChange}>
                <option value="dollars">$ Dollars</option>
                <option value="pounds">£ Pounds</option>
                <option value="euro">€ Euro</option>
                <option value="rupee">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default CurrencySelector;