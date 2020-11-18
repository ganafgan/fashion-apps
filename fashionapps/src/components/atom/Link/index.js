import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const Link = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Link

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.blue
    }
})
