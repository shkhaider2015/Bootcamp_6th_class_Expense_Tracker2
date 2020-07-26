import React, {createContext, useReducer} from 'react'
import TransactionReducer from './transactionReducer'

const initialTransactions = [
    { amount: 500, desc: "Cash" },
    { amount: -40, desc: "Book" },
    { amount: -200, desc: "Camera" },
    { amount: 300, desc: "Cash" }
]

export const TransactionContext = createContext(initialTransactions)

export const TransactionProvider = (()=>{

    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions)

    function addTransaction(TransObject)
    {
        dispatch({
            type : "ADD",
            payload : {
                amount : 101,
                desc : "Cash"
            }
        })
    }
})