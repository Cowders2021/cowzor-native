import React from 'react';
import { Text, StyleSheet } from 'react-native';;
import FkaSpaceBottom from './FkaSpaceBottom';

interface Props {
    children: React.ReactNode,
    size?: 'small' | 'medium' | 'large'
}

const FkaHeadline = (props: Props) => {
    return (
        <FkaSpaceBottom>
            <Text style={props.size ?
                props.size === 'small' && styles.headlineSmall ||
                props.size === 'medium' && styles.headlineMedium ||
                props.size === 'large' && styles.headline
                : styles.headline}>{props.children}</Text>
        </FkaSpaceBottom>
    )
}

const styles = StyleSheet.create({
    headline: {
        fontSize: 35,
        fontWeight: '700',
        marginBottom: 5
    },
    headlineSmall: {
        fontSize: 16,
        fontWeight: '700'
    },
    headlineMedium: {
        fontSize: 20,
        fontWeight: '700'
    }
})

export default FkaHeadline;