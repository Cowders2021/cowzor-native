import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import FkaButton from '../components/Button';

const CameraPage = () => {
    const [hasPermission, setHasPermission] = useState<boolean>(false);
    const [type] = useState(Camera.Constants.Type.back);
    const [cameraRef, setCameraRef] = useState<Camera | null>();
    const [_, setPhoto] = useState<any>();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, [])

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>Har ikke tilgang til kamera</Text>;
    }

    const takePhoto = async () => {
        if (cameraRef) {
            const photo = await cameraRef.takePictureAsync();
            setPhoto(photo);
        }
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ref={ref => setCameraRef(ref)}>
                <View style={styles.buttonContainer}>
                    <FkaButton label="Ta bilde" onClick={takePhoto}></FkaButton>
                </View>
            </Camera>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 20,
        height: '92%'
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});

export default CameraPage;