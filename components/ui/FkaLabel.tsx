import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
    children: React.ReactNode;
}

const FkaLabel = (props: Props) => {
    return (
        <Text style={styles.label}>{props.children}</Text>
    )
}
const styles = StyleSheet.create({
    label: {
        fontWeight: '700',
        fontSize: 11,
        textTransform: 'uppercase'
    }
})
export default FkaLabel;