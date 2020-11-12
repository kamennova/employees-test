import React from "react";
import { connect } from "react-redux";
import {
    formatDate,
    getSeasonByMonth,
    groupByBdayArr,
    Months,
} from "../../utils/helpers";
import { StoreShape } from "../../store/shape";
import { Employee } from "../../types/Employee";
import { EmployeeItem } from "../basic/Employee";

const BirthdayItems = (props: { items: Employee[] }) => {
    return (
        <aside className={"employee-birthday"}>
            <h2>Employees birthday</h2>
            {props.items.length === 0 ? (
                <span className={"no-items"}>No selected employees</span>
            ) : undefined}
            {groupByBdayArr(props.items).map((res) => (
                <MonthEmployees {...res} />
            ))}
        </aside>
    );
};

const MonthEmployees = (props: { monthIndex: number; items: Employee[] }) => (
    <article>
        <h3 className={`month-label ${getSeasonByMonth(props.monthIndex)}`}>
            {Months[props.monthIndex]}
        </h3>
        <ul className="bdays-list">
            {props.items.map((emp) => (
                <li>
                    <EmployeeItem item={emp} /> - {formatDate(emp.dob)}
                </li>
            ))}
        </ul>
    </article>
);

const mapStateToProps = (state: StoreShape) => ({
    items: state.employees.filter((emp) => state.selected.includes(emp.id)),
});

export const Birthday = connect(mapStateToProps)(BirthdayItems);
