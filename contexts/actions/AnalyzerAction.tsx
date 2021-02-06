import { IAnalyzer } from "../../api/analyzer/analyzer.interface";

export enum AnalyzerActionTypes {
    SetResults = 'SET_RESULTS'
}

type SetResults = {
    readonly type: AnalyzerActionTypes.SetResults,
    readonly payload: IAnalyzer[]
}

export type AnalyzerAction = SetResults