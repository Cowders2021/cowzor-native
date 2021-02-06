import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FKA_BASIC } from '../../styles/Colors';

const FkaCard: React.FC = (props) => {
    return (
        <View style={styles.card} needsOffscreenAlphaCompositing={false}>
            { props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        elevation: 1,
        backgroundColor: FKA_BASIC
    }
})

export default FkaCard;