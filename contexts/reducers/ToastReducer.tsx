import { ToastActions, ToastActionTypes } from "../actions/ToastActions";
import { ToastState } from "../ToastContext";

export const toastReducer = (state: ToastState, action: ToastActions): ToastState => {
    switch (action.type) {
        case ToastActionTypes.SetToast:
            return {
                ...state,
                toasts: [...state.toasts, action.payload]
            }
        case ToastActionTypes.RemoveToast:
            return {
                ...state,
                toasts: [...state.toasts.filter((toast) => toast !== action.payload)]
            }
        default:
            return {
                ...state
            }
    }
}