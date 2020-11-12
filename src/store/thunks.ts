import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getEmployees } from "../API";
import { setEmployees } from "./actions";
import { StoreShape } from "./shape";

export type ThunkResult<ValueType> = ActionCreator<
    ThunkAction<Promise<ValueType | undefined>, StoreShape, void, Action<void>>
>;

export const thunkFetchEmployees: ThunkResult<Action> = () => async (
    dispatch: Dispatch
) => await getEmployees().then((emp) => dispatch(setEmployees(emp)));
