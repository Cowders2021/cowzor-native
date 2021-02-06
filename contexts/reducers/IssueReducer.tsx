import { IssueAction, IssueActionTypes } from "../actions/IssueAction"
import { IssueState } from "../IssueContext"

export const issueReducer = (state: IssueState, action: IssueAction): IssueState => {
    switch (action.type) {
        case IssueActionTypes.SetIssues:
            return {
                ...state,
                issues: action.payload
            }
        case IssueActionTypes.AddIssue:
            return {
                ...state,
                issues: [...state.issues, action.payload]
            }
        case IssueActionTypes.RemoveIssue:
            return {
                ...state,
                issues: state.issues.filter((issue) => issue.id !== action.payload.id)
            }
        case IssueActionTypes.SetLoading:
            return {
                ...state,
                isLoading: action.payload
            }
        case IssueActionTypes.SetError:
            return {
                ...state,
                error: action.payload
            }
        default:
            return {
                ...state
            }
    }
}