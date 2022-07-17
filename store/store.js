import cartReducer from "./slices/cartSlice";
import {configureStore} from "@reduxjs/toolkit";
import cartUiSlice  from './slices/cartUiSlice';

export default configureStore({
    reducer: {
        cart: cartReducer,
        cartUi: cartUiSlice,
    }
})