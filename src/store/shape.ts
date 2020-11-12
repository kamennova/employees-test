import { Employee } from "../types/Employee";

export type StoreShape = {
    employees: Employee[];
    selected: string[];
};

export const InitialShape: StoreShape = {
    employees: [],
    selected: [],
};
