
const initState = {
    counter: 0,
    results: []
};

const reducer = (state = initState, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            }

        case 'SUB':
            return {
                ...state,
                counter: state.counter - action.val
            }

        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case 'DELETE_RESULT':
            return {
                ...state,
                results: state.results.filter((result) => result.id !== action.actionElId)
            }
    }
    return state;
};

export default reducer;