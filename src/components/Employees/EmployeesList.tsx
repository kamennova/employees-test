import React, { useEffect } from "react";
import { connect } from "react-redux";
import { groupByAlphabetArr } from "../../utils/helpers";
import { updateEmployeeSelection } from "../../store/actions";
import { StoreShape } from "../../store/shape";
import { thunkFetchEmployees } from "../../store/thunks";
import { Employee } from "../../types/Employee";
import { EmployeeItem } from "../basic/Employee";
import { Checkbox } from "../basic/inputs/Checkbox";

type EmployeeSelection = Employee & { isSelected: boolean };

type ListProps = {
    items: EmployeeSelection[];
    getEmployees: () => Promise<Employee[]>;
    updateEmployeeSelection: (id: string) => void;
};

const EmployeeListComponent = (props: ListProps) => {
    useEffect(() => {
        if (props.items.length === 0) {
            props.getEmployees();
        }
    }, [props.items]);

    return (
        <div className={"employees"}>
            <h2>Employees</h2>
            <div className={"alphabet-list"}>
                {groupByAlphabetArr(props.items, "lastName").map((elem) => (
                    <EmployeesByLetter
                        {...elem}
                        updateSelection={props.updateEmployeeSelection}
                    />
                ))}
            </div>
        </div>
    );
};

const EmployeesByLetter = (props: {
    items: EmployeeSelection[];
    letter: string;
    updateSelection: (id: string) => void;
}) => (
    <article className={"alphabet-item"}>
        <h2>{props.letter}</h2>
        {props.items.length === 0 ? "---" : undefined}

        <ul className={"employees-letter-list"}>
            {props.items.map((emp) => (
                <EmployeeListItem
                    item={emp}
                    updateSelection={props.updateSelection}
                />
            ))}
        </ul>
    </article>
);

const EmployeeListItem = (props: {
    item: EmployeeSelection;
    updateSelection: (id: string) => void;
}) => (
    <li className={"employee-list-item"}>
        <span
            onClick={() => props.updateSelection(props.item.id)}
            className={"employee-item-wrap"}
        >
            <EmployeeItem item={props.item} />
        </span>
        <Checkbox
            value={props.item.isSelected}
            setValue={() => props.updateSelection(props.item.id)}
        />
    </li>
);

const mapStateToProps = (state: StoreShape) => ({
    items: state.employees.map((emp) => ({
        ...emp,
        isSelected: state.selected.includes(emp.id),
    })),
});

const mapDispatchToProps = (dispatch: any) => ({
    getEmployees: () => dispatch(thunkFetchEmployees()),
    updateEmployeeSelection: (id: string) =>
        dispatch(updateEmployeeSelection(id)),
});

export const EmployeeList = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeListComponent);
