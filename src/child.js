import React, { useContext, useState } from 'react'
import {TransactionContext} from './transactionContext'


function Child() {

    let {transactions, addTransaction} = useContext(TransactionContext)
    let [newDesc, setNewDesc] = useState("");
    let [newAmount, setNewAmount] = useState(0);
    // const handleAddition = (event) => 
    // {
    //     event.preventDefault()
    //     console.log(newDesc, newAmount)
    //     addTransaction({
    //         amount : newAmount,
    //         desc : newDesc
    //     })

    // }
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        addTransaction(
            {
                amount : Number(newAmount),
                desc : newDesc
            }
        )
    }

    const getIncome = () => 
    {
        let income = 0;
        for(var i=0; i<transactions.length; i++)
        {
            if(transactions[i].amount > 0)
            {
                income += transactions[i].amount
            }
        }
        return income
    }
    const getExpence = () => 
    {
        let expance = 0;
        for(var i=0; i<transactions.length; i++)
        {
            if(transactions[i].amount < 0)
            {
                expance += transactions[i].amount
            }
        }
        return expance
    }

    return (
        <div className="container">

            <h1 className="text-center">Expence Tracker</h1>

            <h3>Your Balance <br />${ getIncome() + getExpence() } </h3>

            <div className="expense-container">
                <h3>Income <br /> ${getIncome()} </h3> <div className="vl"></div>
                <h3>Expense <br /> ${getExpence()} </h3>

            </div>

            <h3>History</h3>
            <hr />

            <ul className="transaction-list">
                {transactions.map((transObj, ind) => {
                    return (
                        <li key={ind}>
                            <span>{transObj.desc}</span>
                            <span>{transObj.amount}</span>
                        </li>
                    )
                })}

            </ul>

            <h3>Add New Transactions</h3>
            <hr />
            <form className="transactions-form" onSubmit={handleSubmit}>
                <label>
                    Enter Description <br />
                    <input type="text" onChange={ (eve) => setNewDesc(eve.target.value) } required />
                </label>
                <br />
                <label>
                    Enter Amount <br />
                    <input type="number" onChange={ (eve) => setNewAmount(eve.target.value) } required />
                </label>
                <br />
                <input type="submit" value="ADD" />
            </form>

        </div>
    )
}

export default Child