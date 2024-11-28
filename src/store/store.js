import { legacy_createStore,combineReducers } from "redux";
import { authReducer } from "../components/reducers/authReducer";


const reducers=combineReducers({
    auth:authReducer
})

export const store =legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


// crear el reducer 
// crear los typos del reducer
// asigna el reducer en el store 
// en App Journal crear el provider y pasarle el store como popierty store
// 
// 




