import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    }
})

// Action creators are generated for each case reducer function
const { increment, decrement, incrementByAmount } = counterSlice.actions
// export const selectCount = (state) => state.counter.value

const incrementAsync = _ => async dispatch => {
    dispatch(incrementByAmount(1))
    const amount = await new Promise((resolve, reject) => {
        setTimeout(_ => {
            resolve(Math.max(parseInt(Math.random() * 10), 1))
        }, 200)
    })
    dispatch(incrementByAmount(amount))
}

export const actions = { increment, decrement, incrementAsync}

export default counterSlice.reducer