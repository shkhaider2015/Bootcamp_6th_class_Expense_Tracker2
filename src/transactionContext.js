import React, {createContext} from 'react'

const initialTransactions = [
    { amount: 500, desc: "Cash" },
    { amount: -40, desc: "Book" },
    { amount: -200, desc: "Camera" },
    { amount: 300, desc: "Cash" }
]

export const TransactionContext = createContext(initialTransactions)
