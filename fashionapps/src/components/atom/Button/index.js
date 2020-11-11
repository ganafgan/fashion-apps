import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import IconOnly from './IconOnly'

const Button = ({title, type, onPress, icon}) => {

    if(type === 'icon-only'){
        return <IconOnly icon={icon} onPress={onPress} />
    }
    return (
        <TouchableOpacity onPress={onPress} style={styles.container(type)}>
            <Text style={styles.title(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (type) => ({
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        backgroundColor: type === 'primary' ? colors.black : colors.border
    }),
    title: (type) => ({
        fontSize: 15,
        color: type === 'primary' ? colors.white : colors.black,
        fontFamily: fonts.primary[600]
    })
})
