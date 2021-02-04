import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { useHistory } from "react-router-native"
import FkaButton from "../components/Button"
import { FKA_PRIMARY, FKA_YELLOW } from "../styles/Colors"

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
        backgroundColor: FKA_PRIMARY,
        color: FKA_YELLOW,
        padding: 20
    },

    header: {
        paddingTop: 20,
        alignItems: 'center'
    },

    headline: {
        color: FKA_YELLOW,
        fontSize: 50
    }
})

export default Login;