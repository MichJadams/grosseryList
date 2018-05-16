import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from 'redux-logger'
const ADD_GROCERY = "ADD_GROCERY"
const TOGGLE_GROCERY ="TOGGLE_GROCERY"

let nextId = 0
export const addGrocery = (text)=>{
    return {
        type: ADD_GROCERY,
        id:  nextId++,
        text: text
    }
}
export const toggleGrocery = (id)=>{
    return {
        type: TOGGLE_GROCERY,
        id: id
    }
}
const initialState = {groceries:[]}

const reducer =(prevState = initialState, action)=>{
    switch(action.type){
        case ADD_GROCERY: 
        const newGrocery ={
            id:action.id,
            text: action.text,
            bought: false
        }
        return {...prevState, groceries: [...prevState.groceries, newGrocery]}

        break
        case TOGGLE_GROCERY: 

        const groceries = prevState.groceries.map(grocery=>{
            if(grocery.id === action.id){
                return {...grocery, bought: true}
            }else{
                return grocery
            }
        })
        return {...prevState, groceries: groceries}
        default:
        return prevState
    }
}

const mids = applyMiddleware(loggerMiddleware)
// applyMiddleware(loggerMiddleware)
const store = createStore(reducer, mids)
store.dispatch(addGrocery("snacks"))
store.dispatch(addGrocery("chocolate"))
export default store