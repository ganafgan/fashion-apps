import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import GoogleBtn from './GoogleBtn'
import IconOnly from './IconOnly'

const Button = ({title, type, onPress, icon, mini}) => {

    if(type === 'icon-only'){
        return <IconOnly icon={icon} onPress={onPress} />
    }

    if(type === 'google-btn'){
        return <GoogleBtn onPress={onPress} />
    } 
    return (
        <TouchableOpacity onPress={onPress} style={styles.container(type, mini)}>
            <Text style={styles.title(type, mini)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (type, mini) => ({
        alignItems: 'center',
        justifyContent: 'center',
        padding: mini ? 5 : 10,
        backgroundColor: type === 'secondary' ? colors.white : colors.black,
        borderWidth: type === 'secondary' ? 1 : 0,
        borderColor: colors.black,
        borderRadius: mini ? 5 : 10
    }),
    title: (type, mini) => ({
        fontSize: mini ? 12 : 14,
        color: type === 'secondary' ? colors.black : colors.white,
        fontFamily: fonts.primary[600],
    })
})
