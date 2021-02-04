import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { useHistory } from "react-router-native"
import FkaButton from "../components/Button"

const Login = () => {
    const history = useHistory();
    const onLoginButtonClick = () => {
        history.push('/home');
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headline}>Login</Text>
                <Text>Please login or signup to get started!</Text>
            </View>
            <View>
                <FkaButton label="Login" onClick={onLoginButtonClick} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5ca673',
        color: '#ffe500',
        padding: 20
    },

    header: {
        paddingTop: 20,
        alignItems: 'center'
    },

    headline: {
        color: '#ffe500',
        fontSize: 50
    }
})

export default Login;