const TransactionReducer = ((state, action) => {
    switch(action)
    {
        case "ADD":
            {
                return [action.payload, ...state]
            }
        default:
            return state;
    }
})

export default TransactionReducer;