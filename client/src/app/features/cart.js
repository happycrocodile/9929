import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    payload: {
        sidebar: false,
        items: [],
        total_amount: 0,
    }
};

const __init__ = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            state.payload.items.push(action.payload);
            state.payload.total_amount += action.payload.unit_price;
        },
        removeItem: (state, action) => {
            let index = state.payload.items.findIndex(x => x.id === action.payload.id);
            state.payload.total_amount -= action.payload.unit_price;
            state.payload.items.splice(index, 1);
        },
        setSidebar: (state, action) => {
            state.payload.sidebar = action.payload;
        },
        clean: state => {
            state.payload.sidebar = false;
            state.payload.items = [];
            state.payload.total_amount = 0;
        },
    }
});

export const { setPayer, addItem, removeItem, setSidebar, clean } = __init__.actions;

export default __init__.reducer;
