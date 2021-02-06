import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { IIssue } from '../api/issue/issue.interface'
import FkaCard from "./ui/FkaCard"
import FkaTitle from './ui/FkaTitle'
import FkaPadding from './ui/FkaPadding'
import FkaSpaceBottom from './ui/FkaSpaceBottom'


export const FieldCard = (props: IIssue) => {
    return (
        <FkaSpaceBottom>
            <FkaCard>
                <FkaPadding>
                    <View>
                        <FkaTitle>{props.text}</FkaTitle>
                        <Text>{props.desctiption}</Text>
                    </View>
                </FkaPadding>
            </FkaCard>
        </FkaSpaceBottom>
    )
}

const styles = StyleSheet.create({

})

export default FieldCard;