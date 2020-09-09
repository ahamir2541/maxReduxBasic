import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actionTypes'
import { increment, decrement, add, sub, storeResult, storeDelete } from '../../store/action/Actions'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAdd} />
                <CounterControl label="Subtract 5" clicked={this.props.onSub} />
                <hr />
                <button onClick={() => this.props.onStore(this.props.ctr)} >Store Result</button>
                <ul>  
                    <h2>{this.props.strResults.length === 0 ? 'your store is Empty' : <div>
                    {this.props.strResults.map(strResult => (
                        <li onClick={() => this.props.onDelete(strResult.id) } key={strResult.id}> {strResult.value} </li>
                    ))}
                    </div> }</h2>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        strResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        onAdd: () => dispatch(add(10)),
        onSub: () => dispatch(sub(10)),
        onStore: (result) => dispatch(storeResult(result)),
        onDelete: (id) => dispatch(storeDelete(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);