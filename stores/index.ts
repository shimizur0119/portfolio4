import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit"

import indexReducer, { indexInitialStateType } from "./indexReducer"
import homeReducer, { homeInitialStateType } from "./homeReducer"

export interface StoreType {
    index: indexInitialStateType,
    home: homeInitialStateType,
}

const middlewares = [
    ...getDefaultMiddleware(),
]

const reducer = combineReducers({
    index: indexReducer,
    home: homeReducer,
})

const createStore = () => configureStore({ reducer, middleware: middlewares })

export default createStore