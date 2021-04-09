
const initState = {
    counter: 0
};

const reducer = (state = initState, action) => {
    if (action.type === "INCREMENT") {
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === "DECREMENT") {
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === "ADD") {
        return {
            counter: state.counter + action.val
        }
    }
    if (action.type === "SUB") {
        return {
            counter: state.counter - action.val
        }
    }
    return state;
};

export default reducer;