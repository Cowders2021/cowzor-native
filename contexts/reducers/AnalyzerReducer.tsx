import { AnalyzerAction, AnalyzerActionTypes } from "../actions/AnalyzerAction"

// The time is 02:31... David continue tomorrow morning.

export const analyzerReducer = (state: any, action: AnalyzerAction): any => {
    switch (action.type) {
        case AnalyzerActionTypes.SetResults:
            return {
                ...state,
                results: action.payload
            }
        default:
            return {
                ...state
            }
    }
}