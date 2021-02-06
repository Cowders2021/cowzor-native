export enum AnalyzerActionTypes {
    SetResults = 'SET_RESULTS'
}

type SetResults = {
    readonly type: AnalyzerActionTypes.SetResults,
    readonly payload: boolean
}

export type AnalyzerAction = SetResults