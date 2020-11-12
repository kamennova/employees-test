import { EmployeesAction, SET_EMPLOYEES, UPDATE_SELECTION } from "./actions";
import { InitialShape, StoreShape } from "./shape";

export const appReducers = (
    state: StoreShape = InitialShape,
    action: EmployeesAction
): StoreShape => employees(state, action);

const employees = (state: StoreShape, action: EmployeesAction): StoreShape => {
    switch (action.type) {
        case UPDATE_SELECTION:
            return updateSelectionReducer(state, action.id);
        case SET_EMPLOYEES:
            return { ...state, employees: action.employees };
        default:
            return state;
    }
};

const updateSelectionReducer = (state: StoreShape, id: string): StoreShape => {
    const isSelected = state.selected.includes(id);

    return {
        ...state,
        selected: isSelected
            ? state.selected.filter((id2) => id2 !== id)
            : [...state.selected, id],
    };
};
