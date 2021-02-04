import React from 'react';
import { StyleSheet, View, Text } from "react-native"
import { useToastContext } from '../contexts/ToastContext';
import { FKA_BASIC, FKA_BASIC_DARK, FKA_DANGER, FKA_PRIMARY, FKA_PRIMARY_FG } from '../styles/Colors';
import FkaButton from './Button';

export interface IToast {
    label: string;
    type: 'success' | 'danger'
}

export const FkaToast = () => {
    const { toastState, removeToast } = useToastContext();
    return (
        <>
            {
                toastState.toasts.map((toast, index) => (
                    <View style={(
                        toast.type === 'success' && [styles.toast, styles.success]) ||
                        toast.type === 'danger' && [styles.toast, styles.danger]
                    } key={`toast--index-${index}`}>
                        <View style={styles.spaceBetween}>
                            <Text>{toast.label}</Text>
                            <View>
                                <FkaButton onClick={() => removeToast(toast)} label="OK" />
                            </View>
                        </View>
                    </View>
                ))
            }
        </>
    )
}

const styles = StyleSheet.create({
    toast: {
        position: 'absolute',
        bottom: 20,
        right: 15,
        left: 15,
        backgroundColor: FKA_BASIC,
        padding: 20,
        shadowColor: FKA_BASIC_DARK,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },

    danger: {
        borderLeftColor: FKA_DANGER,
        borderLeftWidth: 5
    },

    success: {
        borderLeftColor: FKA_PRIMARY,
        borderLeftWidth: 5
    },

    spaceBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default FkaToast;