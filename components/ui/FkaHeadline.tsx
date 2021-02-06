import React from 'react';
import { Text, StyleSheet } from 'react-native';
import FkaSpaceBottom from './FkaSpaceBottom';

const FkaHeadline: React.FC = (props) => {
    return (
        <FkaSpaceBottom>
            <Text style={styles.headline}>{props.children}</Text>
        </FkaSpaceBottom>
    )
}

const styles = StyleSheet.create({
    headline: {
        fontSize: 35,
        fontWeight: '700'
    }
})

export default FkaHeadline;