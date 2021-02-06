import { IIssue } from "../../api/issue/issue.interface";

export enum IssueActionTypes {
    SetIssues = 'SET_ISSUE',
    SetLoading = "SET_LOADING",
    AddIssue = 'ADD_ISSUE',
    RemoveIssue = 'REMOVE_ISSUE',
    SetError = "SET_ERROR"
}

type SetIssue = {
    readonly type: IssueActionTypes.SetIssues,
    readonly payload: IIssue[]
}

type AddIssue = {
    readonly type: IssueActionTypes.AddIssue,
    readonly payload: IIssue
}

type RemoveIssue = {
    readonly type: IssueActionTypes.RemoveIssue,
    readonly payload: IIssue
}

type SetLoading = {
    readonly type: IssueActionTypes.SetLoading,
    readonly payload: boolean
}

type SetError = {
    readonly type: IssueActionTypes.SetError,
    readonly payload: string
}

export type IssueAction = SetIssue | AddIssue | RemoveIssue | SetLoading | SetError;