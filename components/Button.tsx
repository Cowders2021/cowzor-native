import React from 'react';
import { Button } from 'react-native';

const FkaButton = () => {
    const onButtonClick = () => alert("You just pressed the button");

    return (
        <Button onPress={onButtonClick} title="Click me!" accessibilityLabel="Click in me!" />
    )
}
export default FkaButton;