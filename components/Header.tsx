import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { FKA_PRIMARY, FKA_PRIMARY_FG } from '../styles/Colors';

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={require('../assets/fk-large.png')} style={styles.logo} />
            <View>
                <Text style={styles.appName}>Cowzor</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: FKA_PRIMARY,
        padding: 15,
        paddingTop: 50
    },
    logo: {
        height: 50,
        width: 50
    },
    appName: {
        color: FKA_PRIMARY_FG,
        fontSize: 18,
        marginLeft: 10
    }
});

export default Header;