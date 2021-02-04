import React from 'react';
import { Button } from 'react-native';
import { FKA_PRIMARY } from '../styles/Colors';

interface Props {
    label: string;
    onClick: () => void
}

const FkaButton = (props: Props) => {
    return (
        <Button color={FKA_PRIMARY} onPress={props.onClick} title={props.label} accessibilityLabel={props.label} />
    )
}

export default FkaButton;