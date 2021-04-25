import * as actionsTypes from '../actions/actions';
const initState = {
    counter: 0
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
    }
    return state;
};

export default reducer;