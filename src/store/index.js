import {applyMiddleware, combineReducers, createStore} from "redux"
import postReducer from "./postReducer";
import thunk from "redux-thunk"

const reducers = combineReducers({
    postState: postReducer
})

export default  createStore(reducers, {}, applyMiddleware(thunk))
