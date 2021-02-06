export enum AnalyzerActionTypes {
    SetResults = 'SET_RESULTS',
    SetAnalyzed = 'SET_IS_ANALYZED'
}

type SetResults = {
    readonly type: AnalyzerActionTypes.SetResults,
    readonly payload: boolean
}

type SetAnalyzed = {
    readonly type: AnalyzerActionTypes.SetAnalyzed,
    readonly payload: boolean
}

export type AnalyzerAction = SetResults | SetAnalyzed