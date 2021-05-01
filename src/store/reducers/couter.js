import * as actionsTypes from '../actions/actionTypes';
import { updatedObject } from '../utility';

const initState = {
    counter: 0
};

const reducer = (state = initState, action) => {

    switch (action.type) {
        case actionsTypes.INCREMENT:
            return updatedObject(state, { counter: state.counter + 1 });
        case actionsTypes.DECREMENT:
            return updatedObject(state, { counter: state.counter - 1 });
        case actionsTypes.ADD:
            return updatedObject(state, { counter: state.counter + action.val });

        case actionsTypes.SUBTRACT:
            return updatedObject(state, { counter: state.counter - action.val });
    }
    return state;
};

export default reducer;