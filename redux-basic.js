// import libary
const redux = require('redux');
const createStore = redux.createStore;

// state
const initState = {
    counter: 0
}

// reducer
const rootReducer = (state = initState, action) => {
    return state;
}

// store
const store = createStore(rootReducer);

console.log(store.getState());


// dispatch action