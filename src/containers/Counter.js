import * as React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {actions} from '../reducers/counter.js';
const {decrement, increment, incrementAsync} = actions

export default function Counter({name = "?"}) {
    const count = useSelector((state) => {return state.counter.value});
    const dispatch = useDispatch();

    return (<div>
            <button onClick={() => dispatch(incrementAsync())}>
                +
            </button>
            <span>
                {count}
            </span>
            <button onClick={_ => dispatch(decrement())}>
                -
            </button>
    </div>)
}