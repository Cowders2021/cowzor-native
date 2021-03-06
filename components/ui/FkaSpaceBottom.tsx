import React from 'react';
import { StyleSheet, View } from 'react-native'

const FkaSpaceBottom: React.FC = (props) => {
    return (
        <View style={styles.spaceBottom}>
            { props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    spaceBottom: {
        marginBottom: 10
    }
})

export default FkaSpaceBottom;