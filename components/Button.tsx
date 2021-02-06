import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { FKA_PRIMARY, FKA_YELLOW } from '../styles/Colors';

interface Props {
    label: string;
    onClick: () => void
}

const FkaButton = (props: Props) => {
    return (
        <View style={styles.borderBottom}>
            <Button color={FKA_PRIMARY} onPress={props.onClick} title={props.label} accessibilityLabel={props.label} />
        </View>
    )
}

const styles = StyleSheet.create({
    borderBottom: {
        borderBottomColor: FKA_YELLOW,
        borderBottomWidth: 6
    }
})

export default FkaButton;