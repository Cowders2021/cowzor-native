import { IToast } from "../../components/Toast";

export enum ToastActionTypes {
    SetToast = 'SET_TOAST',
    RemoveToast = 'REMOVE_TOAST',
}

type SetToast = {
    readonly type: ToastActionTypes.SetToast,
    readonly payload: IToast
}

type RemoveToast = {
    readonly type: ToastActionTypes.RemoveToast,
    readonly payload: IToast
}

export type ToastActions = SetToast | RemoveToast;