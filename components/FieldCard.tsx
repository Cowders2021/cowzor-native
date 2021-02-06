import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { IIssue } from '../api/issue/issue.interface'
import FkaCard from "./ui/Card"
import FkaTitle from './ui/FkaTitle'
import Padding from './ui/Padding'
import SpaceBottom from './ui/SpaceBottom'


export const FieldCard = (props: IIssue) => {
    return (
        <SpaceBottom>
            <FkaCard>
                <Padding>
                    <View>
                        <FkaTitle>{props.text}</FkaTitle>
                        <Text>{props.desctiption}</Text>
                    </View>
                </Padding>
            </FkaCard>
        </SpaceBottom>
    )
}

const styles = StyleSheet.create({

})

export default FieldCard;