import * as actionsTypes from '../store/actions';
const initState = {
    counter: 0,
    results: []
};

const reducer = (state = initState, action) => {

    switch (action.type) {
        case actionsTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionsTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionsTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }

        case actionsTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }

        case actionsTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case actionsTypes.DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter((result) => result.id !== action.resultElId)
            }
    }
    return state;
};

export default reducer;