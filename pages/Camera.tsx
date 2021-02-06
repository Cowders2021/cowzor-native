import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import FkaButton from '../components/Button';
import * as ImageManipulator from 'expo-image-manipulator';
import { AnalyzerAPI } from '../api/analyzer/analyzer';
import { FKA_BASIC } from '../styles/Colors';
import FkaHeadline from '../components/ui/FkaHeadline';
import FkaPadding from '../components/ui/FkaPadding';
import FkaSpaceBottom from '../components/ui/FkaSpaceBottom';
import { useIAnalyzerContext } from '../contexts/AnalyzerContext';
import { Spinner } from '../components/Spinner';
import FkaCard from '../components/ui/FkaCard';
import { useHistory } from 'react-router';


const CameraPage = () => {
    const [hasPermission, setHasPermission] = useState<boolean>(false);
    const [cameraRef, setCameraRef] = useState<Camera | null>();
    const [showCamera, setShowCamera] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { analyzerState, analyzeImageResult } = useIAnalyzerContext();

    const history = useHistory();

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

    const navigateTo = (url: string) => {
        history.push(url);
    }

    const compressAndResizeImage = async (photo: any): Promise<ImageManipulator.ImageResult> => {
        return await ImageManipulator.manipulateAsync(
            photo.localUri || photo.uri,
            [{ resize: { width: 400, height: 800 } }],
            { compress: 0.5, base64: true },
        );
    }

    const uploadImage = async (base64Image: string | undefined) => {
        if (!base64Image) {
            return;
        }
        try {
            const response = await AnalyzerAPI.post(base64Image);
            analyzeImageResult(response);
        } catch (error) {
            console.warn(error);
        }
    }

    const takePhoto = async () => {
        if (cameraRef) {
            setIsLoading(true)
            try {
                const photo = await cameraRef.takePictureAsync({ quality: 0, base64: true });
                setShowCamera(false);
                const resizedImage = await compressAndResizeImage(photo);
                await uploadImage(resizedImage.base64);
                setIsLoading(false)
            } catch {
                setIsLoading(false)
            }

        }
    }

    return (
        <View style={styles.container}>
            {
                showCamera ? (
                    <Camera style={styles.camera} ref={(ref: any) => setCameraRef(ref)}>
                        <View style={styles.buttonContainer}>
                            <FkaButton label="Ta bilde" onClick={takePhoto}></FkaButton>
                        </View>
                    </Camera>
                ) : (
                        <FkaPadding>
                            {
                                isLoading ? <View style={styles.spinnerContainer}><Spinner /></View> : (
                                    <>
                                        <FkaSpaceBottom>
                                            <FkaHeadline>Vekstkontroll</FkaHeadline>
                                            <Text>Det er viktig å påse at det ikke finnes ugress i åkeren. Det er ikke alltid like lett å vite hva som er farlig ugress og ikke.</Text>
                                        </FkaSpaceBottom>
                                        {
                                            analyzerState.isAnalyzed && (
                                                <>
                                                    <FkaSpaceBottom>
                                                        <FkaHeadline size="medium">Mine resultater</FkaHeadline>
                                                        <Text>Basert på bildet av din åker er det {analyzerState.isWeed ? '' : 'ikke'} ugress i din åker</Text>
                                                    </FkaSpaceBottom>
                                                    {
                                                        analyzerState.isWeed && (
                                                            <FkaSpaceBottom>
                                                                <FkaCard>
                                                                    <FkaPadding>
                                                                        <FkaHeadline size="medium">Anbefalinger</FkaHeadline>
                                                                        <FkaSpaceBottom>
                                                                            <Text>
                                                                                For å unngå slike uønsket vekster som nå er funnet, anbefaler Felleskjøpet at du sprøyter åkeren.
                                                                                For at du ikke skal glemme dette anbefaler vi at du oppretter et problemnotat. på din
                                                                        </Text>
                                                                        </FkaSpaceBottom>
                                                                        <FkaButton label="Opprett problemnotat" onClick={() => navigateTo('./create-issue')}></FkaButton>
                                                                    </FkaPadding>
                                                                </FkaCard>
                                                            </FkaSpaceBottom>
                                                        )
                                                    }
                                                </>
                                            )
                                        }
                                        <FkaButton onClick={() => setShowCamera(true)} label="Start Vekstkontroll"></FkaButton>
                                    </>
                                )
                            }
                        </FkaPadding>
                    )
            }
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
        color: FKA_BASIC,
    },
    spinnerContainer: {
        marginTop: 100
    }
});

export default CameraPage;