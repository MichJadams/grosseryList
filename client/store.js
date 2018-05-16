import { createStore } from "redux";

const ADD_GROCERY = "ADD_GROCERY"

let nextId = 0
export const addGrocery = (text)=>{
    return {
        type: ADD_GROCERY,
        id:  nextId++,
        text: text
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
        default:
            return prevState
    }
}

const store = createStore(reducer, initialState)
store.dispatch(addGrocery("snacks"))
store.dispatch(addGrocery("chocolate"))
export default store