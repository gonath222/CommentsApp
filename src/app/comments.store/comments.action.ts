import { Action } from '@ngrx/store';
import { CommentsModel } from '../model/comments.model';

export const ADD_COMMENTS = "ADD_COMMENTS";
export const DELETE_COMMENTS = "DELETE_COMMENTS";

export class AddComments implements Action {
    readonly type = ADD_COMMENTS;
    constructor(public payload: CommentsModel) { }
}

export class DeleteComments implements Action {
    readonly type = DELETE_COMMENTS;
    constructor(public id: number) { }
}

export type CommentsActionType = AddComments | DeleteComments;