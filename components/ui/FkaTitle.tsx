import React from 'react';
import { StyleSheet, Text } from 'react-native'
const FkaTitle: React.FC = (props) => {
    return (
        <Text style={styles.title}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 5
    }
})

export default FkaTitle;