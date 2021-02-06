import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { IssueAPI } from '../api/issue/issue.api';
import { IIssue } from '../api/issue/issue.interface';
import { Spinner } from '../components/Spinner';
import { IssueActionTypes } from './actions/IssueAction';
import { issueReducer } from './reducers/IssueReducer';

export type IssueState = {
    issues: IIssue[];
    isLoading: boolean;
    error: string | null;
}

interface IIssueContext {
    issueState: IssueState,
    setIssues: () => void
}

const initialIssueState: IIssueContext = {
    issueState: {
        issues: [],
        isLoading: false,
        error: null
    },
    setIssues: () => { }
}

const IssueStore: React.FC = (props) => {
    const [issueState, dispatch] = useReducer(issueReducer, initialIssueState.issueState);

    useEffect(() => {
        setIssues()
    }, [])

    const setIssues = async (): Promise<void> => {
        setIsLoading(true);
        try {
            const issues = await IssueAPI.get();
            dispatch({
                type: IssueActionTypes.SetIssues,
                payload: issues
            })
            setIsLoading(false);
        } catch (error) {
            console.warn(error);
            setIsLoading(false);
        }
    }

    const setIsLoading = (isLoading: boolean) => {
        dispatch({
            type: IssueActionTypes.SetLoading,
            payload: isLoading
        })
    }

    return (
        <IssueContext.Provider value={{
            issueState,
            setIssues
        }}>
            { issueState.isLoading ? <Spinner /> : props.children}
        </IssueContext.Provider>
    )
}
export const IssueContext = createContext<IIssueContext>(initialIssueState)
export default IssueStore;

export const useIssueContext = () => {
    return useContext(IssueContext);
}