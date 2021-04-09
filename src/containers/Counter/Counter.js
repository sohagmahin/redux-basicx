import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={this.props.onStoreResult} >Store Result</button>
                <ul>
                    {this.props.storedResult.map((storeResult) => {
                        return (<li key={storeResult.id} onClick={() => this.props.onDeleteResult(storeResult.id)}>{storeResult.value}</li>);
                    })}
                </ul>
            </div>
        );
    }
}

//Takes state from redux provider then convert it to props
const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResult: state.results
    };
};

//Takes dispatch action from Redux Provider(mainly from reducer) to convert it in props.
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
        onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
        onAddCounter: () => dispatch({ type: "ADD", val: 5 }),
        onSubtractCounter: () => dispatch({ type: "SUB", val: 5 }),
        onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
        onDeleteResult: (id) => dispatch({ type: "DELETE_RESULT", resultElId: id }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);