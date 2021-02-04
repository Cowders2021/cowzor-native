import React from 'react';
import { createContext, useContext, useReducer } from "react";
import { IToast } from "../components/Toast";
import { ToastActionTypes } from "./actions/ToastActions";
import { toastReducer } from "./reducers/ToastReducer";

export type ToastState = {
    toasts: IToast[]
}

interface IToastContext {
    toastState: ToastState,
    setToast: (toast: IToast) => void,
    removeToast: (toast: IToast) => void
}

const initialToastState: IToastContext = {
    toastState: {
        toasts: []
    },
    setToast: (toast: IToast) => { },
    removeToast: (toast: IToast) => { }
}

const ToastStore: React.FC = (props) => {
    const [toastState, dispatch] = useReducer(toastReducer, initialToastState.toastState);

    const setToast = (toast: IToast): void => {
        dispatch({
            type: ToastActionTypes.SetToast,
            payload: toast
        })
    }

    const removeToast = (toast: IToast): void => {
        dispatch({
            type: ToastActionTypes.RemoveToast,
            payload: toast
        })
    }

    return (
        <ToastContext.Provider value={{
            toastState,
            setToast,
            removeToast
        }}>
            { props.children}
        </ToastContext.Provider>
    )
}

export const ToastContext = createContext<IToastContext>(initialToastState);
export default ToastStore;

export const useToastContext = () => {
    return useContext(ToastContext);
}