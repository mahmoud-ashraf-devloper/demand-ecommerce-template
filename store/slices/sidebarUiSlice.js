import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    showSidebar: false,
};

export const sidebarUiSlice = createSlice({
    name: 'sidebarUi',

    initialState,

    reducers: {
        toggleSidebar: (state) => {
            state.showSidebar = !state.showSidebar;
        }
    }
})

export const { toggleSidebar } = sidebarUiSlice.actions;
export default sidebarUiSlice.reducer;