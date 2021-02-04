import React from 'react';
import { View, StyleSheet } from 'react-native';

const FkaCard: React.FC = (props) => {
    return (
        <View style={styles.card}>
            { props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd'
    }
})

export default FkaCard;