import React, { createContext, useReducer } from 'react'
import TransactionReducer from './transactionReducer'

const initialTransactions = [
    { amount: 500, desc: "Cash" },
    { amount: -40, desc: "Book" },
    { amount: -200, desc: "Camera" },
    { amount: 300, desc: "Bash" }
]

export const TransactionContext = createContext(initialTransactions)

export const TransactionProvider = ({ children }) =>{

    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions)

    function addTransaction(transactionObject)
    {
        dispatch({
            type : "ADD",
            payload : {
                amount : transactionObject.amount,
                desc : transactionObject.desc
            }
        })
    }

    return(
        <TransactionContext.Provider value={
           {
               transactions : state, 
               addTransaction //addTransaction : addTransaction
           }
        } >

        { children }

        </TransactionContext.Provider>
    )
}