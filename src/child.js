import React, { useContext } from 'react'
import {TransactonContext, TransactionContext} from './transactionContext'


function Child() {

    let transactions = useContext(TransactionContext)

    return (
        <div className="container">

            <h1 className="text-center">Expence Tracker</h1>

            <h3>Your Balance <br />$260.0</h3>

            <div className="expense-container">
                <h3>Income <br /> $500</h3>
                <h3>Expense <br /> $500</h3>

            </div>

            <h3>History</h3>
            <hr />

            <ul className="transaction-list">
                {transactions.map((transObj, index) => {
                    return (
                        <li>
                            <span>{transObj.desc}</span>
                            <span>{transObj.amount}</span>
                        </li>
                    )
                })}

            </ul>

            <h3>Add New Transactions</h3>
            <hr />
            <form className="transactions-form">
                <label>
                    Enter Description <br />
                    <input type="text" required />
                </label>
                <br />
                <label>
                    Enter Amount <br />
                    <input type="number" required />
                </label>
                <br />
                <input type="submit" value="Add Transaction" />
            </form>

        </div>
    )
}

export default Child