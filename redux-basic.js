// import libary
const redux = require('redux');
const createStore = redux.createStore;

// state
const initState = {
    counter: 0
}

// reducer
const rootReducer = (state = initState, action) => {
    if (action.type == "INT_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type == "ADD_COUNTER") {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

// store
const store = createStore(rootReducer);
console.log(store.getState());


// dispatch action

store.dispatch({ type: "INT_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());

// subscriptions