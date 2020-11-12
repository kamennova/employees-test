import React from "react";
import { EmployeeList } from "./EmployeesList";
import { Birthday } from "./Birthdays";

export const Employees = () => (
    <div className="employees-wrapper">
        <EmployeeList />
        <Birthday />
    </div>
);
