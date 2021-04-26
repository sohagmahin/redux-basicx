import * as actionsTypes from '../actions/actionTypes';
const initState = {
    results: []
};

const reducer = (state = initState, action) => {

    switch (action.type) {
        case actionsTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result })
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