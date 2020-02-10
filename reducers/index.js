import { combineReducers } from 'redux'

const counter = (state = 115, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'SUBTRACT':
      return state - 1
    default:
      return state
  }
}

const user = (state = {email: null}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, email: action.payload }
    default:
      return state
  }
}

const rootReducer = combineReducers({
	counter,
	user
})

export default rootReducer