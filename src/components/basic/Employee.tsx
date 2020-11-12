import React from "react";
import { Employee } from "../../types/Employee";

export const EmployeeItem = (props: { item: Employee }) => (
    <span className={"employee-name"}>
        {props.item.lastName + " " + props.item.firstName}
    </span>
);
