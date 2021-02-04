import React from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';
import { useHistory } from 'react-router-native';
import { FKA_PRIMARY, FKA_PRIMARY_FG } from '../styles/Colors';

const Header = () => {
    const history = useHistory();
    const onLogoClick = () => {
        history.push('/')
    }
    return (
        <View style={styles.header}>
            <TouchableHighlight onPress={onLogoClick}>
                <Image source={require('../assets/fk-large.png')} style={styles.logo} />
            </TouchableHighlight>
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