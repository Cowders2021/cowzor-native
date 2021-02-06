import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import FkaContainer from '../components/ui/FkaContainer';

const Cownter = () => {
    return (
    <FkaContainer>
        <Text>Cownting</Text>
        
    </FkaContainer>
    )
}

const styles = StyleSheet.create({
    headline: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: '700',
    }
});
export default Cownter;