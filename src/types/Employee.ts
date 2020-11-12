export interface EmployeeBase {
    id: string;
    firstName: string;
    lastName: string;
}

export interface Employee extends EmployeeBase {
    dob: Date;
}

export interface EmployeeReq extends EmployeeBase {
    dob: string;
}
