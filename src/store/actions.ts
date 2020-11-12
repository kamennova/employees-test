import { Employee } from "../types/Employee";

export const SET_EMPLOYEES = "Set_employees",
    UPDATE_SELECTION = "Update selection";

export type SetEmployeesAction = {
    type: typeof SET_EMPLOYEES;
    employees: Employee[];
};

export type UpdateEmployeeSelectionAction = {
    id: string;
    type: typeof UPDATE_SELECTION;
};

export const setEmployees = (employees: Employee[]): SetEmployeesAction => ({
        employees,
        type: SET_EMPLOYEES,
    }),
    updateEmployeeSelection = (id: string): UpdateEmployeeSelectionAction => ({
        id,
        type: UPDATE_SELECTION,
    });

export type EmployeesAction =
    | SetEmployeesAction
    | UpdateEmployeeSelectionAction;
