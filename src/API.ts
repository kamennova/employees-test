import axios from "axios";
import { Employee, EmployeeReq } from "./types/Employee";

export const getEmployees = async (): Promise<Employee[]> =>
    axios
        .get("https://yalantis-react-school-api.yalantis.com/api/task0/users")
        .then((res) =>
            res.data.map((emp: EmployeeReq) => ({
                ...emp,
                dob: new Date(Date.parse(emp.dob)),
            }))
        );
