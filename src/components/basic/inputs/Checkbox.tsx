import React from "react";

type CheckboxProps = {
    value: boolean;
    setValue: (v: boolean) => void;
};

export const Checkbox = (props: CheckboxProps) => (
    <span className={"checkbox"}>
        <span
            className={`checkbox-indicator ${props.value ? "checked" : " "}`}
            onClick={() => props.setValue(!props.value)}
        />
        <input
            className={"visually-hidden"}
            type="checkbox"
            checked={props.value}
            onChange={(evt) => props.setValue(evt.target.checked)}
        />
    </span>
);
