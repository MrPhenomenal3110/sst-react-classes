import { applyMiddleware, combineReducers, createStore } from "redux";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
    cart : cartReducer,
    category: categoryReducer
});

const store = createStore(reducer, applyMiddleware(thunk))

export default store;