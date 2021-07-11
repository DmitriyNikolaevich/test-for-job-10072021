import { combineReducers, createStore } from "redux"
import mainReducer from "./mainReducer"

const commonReducer = combineReducers({
    main: mainReducer
})

export const store = createStore(commonReducer)

export default store

window.__store__ = store