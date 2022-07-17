import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    total: 0,
    totalItems: 0,
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            // if we add item for the first time
            if (state.items.length === 0) {
                state.items.push(action.payload);
                state.totalItems = 1;
                state.totalPrice = action.payload.priceAfterDiscount;
            }

            // if we add item for the second time
            else {
                let itemExists = false;
                state.items.forEach(item => {
                    if (item.id === action.payload.id) {
                        item.quantity++;
                        state.totalItems++;
                        state.totalPrice += action.payload.priceAfterDiscount;
                        itemExists = true;
                    }
                })
                if (!itemExists) {
                    state.items.push(action.payload);
                    state.totalItems++;
                    state.totalPrice += action.payload.priceAfterDiscount;
                }
            }
        },
        removeItem: (state, action) => {
            state.items.forEach(item => {
                if (item.id === action.payload.id) {
                    state.totalItems--;
                    state.totalPrice -= action.payload.priceAfterDiscount;
                    state.items = state.items.filter(item => item.id !== action.payload.id);
                }
            }
            )
        },
        increaseQuantity: (state, action) => {
            state.items.forEach(item => {
                if (item.id === action.payload.id) {
                    item.quantity++;
                    state.totalItems++;
                    state.totalPrice += item.priceAfterDiscount;
                }
            }
            )
        },
        decreaseQuantity: (state, action) => {
            state.items.forEach(item => {
                if (item.id === action.payload.id) {
                    item.quantity--;
                    state.totalItems--;
                    state.totalPrice -= item.priceAfterDiscount;
                }
            }
            )
        }
    }
})

export default cartSlice.reducer;
export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;