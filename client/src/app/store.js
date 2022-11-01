import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cart from "./features/cart";

const key = "state";

function loadState() {
    try {
        const serializedState = localStorage.getItem(key);
        if (!serializedState) return undefined;
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
}

async function saveState(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch (error) { }
}

const reducers = combineReducers({
    cart,
});

const store = configureStore({
    devTools: true,
    reducer: reducers,
    preloadedState: loadState(),
});

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
