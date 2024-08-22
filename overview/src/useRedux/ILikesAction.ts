import { UnknownAction } from "redux";
import { LikesEnum } from "./LikesEnum";

export interface ILikesAction extends UnknownAction {
    type: LikesEnum,
    payload: string
}