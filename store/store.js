import cartReducer from "./slices/cartSlice";
import {configureStore} from "@reduxjs/toolkit";
import cartUiSlice  from './slices/cartUiSlice';
import sidebarUiSlice  from './slices/sidebarUiSlice';

export default configureStore({
    reducer: {
        cart: cartReducer,
        cartUi: cartUiSlice,
        sidebarUiSlice: sidebarUiSlice,
    }
})