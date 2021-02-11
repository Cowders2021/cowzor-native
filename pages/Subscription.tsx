import { StyleSheet } from 'react-native';
import FkaCard from "../components/ui/FkaCard";
import FkaHeadline from "../components/ui/FkaHeadline";
import FkaPadding from "../components/ui/FkaPadding";
import React from 'react';
import FkaContainer from "../components/ui/FkaContainer";
import { Button, ScrollView, Text } from "react-native"
import FkaButton from "../components/Button";
import FkaSpaceBottom from "../components/ui/FkaSpaceBottom";
import { useHistory } from 'react-router-native';
const Subscription = () => {

    const history = useHistory();
    const navigateToApp = () => {
        history.push('/dashboard')
    }

    return (
        <ScrollView>
            <FkaContainer>
                <FkaPadding>
                    <FkaHeadline size="medium">Velg et passende abonnement.</FkaHeadline>
                </FkaPadding>
                <FkaPadding>
                    <FkaCard>
                        <FkaPadding>
                            <FkaHeadline>Free Abonnement</FkaHeadline>
                            <FkaSpaceBottom>
                                <Text>
                                    Free abonnementet inneholder kun værdata og sensordata fra jordene.
                                </Text>
                            </FkaSpaceBottom>
                            <FkaSpaceBottom>
                                <FkaHeadline>0,-</FkaHeadline>
                            </FkaSpaceBottom>
                            <FkaButton onClick={navigateToApp} label="Kom i gang"></FkaButton>
                        </FkaPadding>
                    </FkaCard>
                </FkaPadding>

                <FkaPadding>
                    <FkaCard>
                        <FkaPadding>
                            <FkaHeadline>Basic Abonnement</FkaHeadline>
                            <FkaSpaceBottom>
                                <Text>
                                    Basic abonnementet inneholder værdata og sensordata fra jordene.
                                </Text>
                            </FkaSpaceBottom>
                            <FkaSpaceBottom>
                                <FkaHeadline>249,-</FkaHeadline>
                            </FkaSpaceBottom>
                            <Button color="#ff5b24" onPress={navigateToApp} title="Betal med Vipps" />
                        </FkaPadding>
                    </FkaCard>
                </FkaPadding>
                <FkaPadding>
                    <FkaCard>
                        <FkaPadding>
                            <FkaHeadline>Pro Abonnement</FkaHeadline>
                            <FkaSpaceBottom>
                                <Text>Premium abonnementet inneholder også Cownter for telling av kuer.</Text>
                            </FkaSpaceBottom>
                            <FkaSpaceBottom>
                                <FkaHeadline>449,-</FkaHeadline>
                            </FkaSpaceBottom>
                            <Button color="#ff5b24" onPress={navigateToApp} title="Betal med Vipps" />
                        </FkaPadding>
                    </FkaCard>
                </FkaPadding>
            </FkaContainer>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
})

export default Subscription;