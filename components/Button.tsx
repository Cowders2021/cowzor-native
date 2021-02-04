import React from 'react';
import { Button } from 'react-native';

interface Props {
    label: string;
    onClick: () => void
}

const FkaButton = (props: Props) => {
    return (
        <Button onPress={props.onClick} title={props.label} accessibilityLabel={props.label} />
    )
}
export default FkaButton;