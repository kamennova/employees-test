import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { accessStorage, writeToStorage } from "../utils/localStorage";
import { appReducers } from "./reducers";
import { InitialShape } from "./shape";

const loadState = () => accessStorage();

const store = createStore(
    appReducers,
    { ...InitialShape, ...loadState() },
    applyMiddleware(thunk)
);

store.subscribe(() => {
    writeToStorage({
        selected: store.getState().selected,
    });
});

export default store;
