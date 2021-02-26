import { IUserCredentials } from "./IUserCredentials";

export interface ILoginComponentProps {

    onSubmitHandle : ( values : IUserCredentials) => void;

};