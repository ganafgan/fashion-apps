import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ILGoogle } from '../../../assets'
import { colors, fonts } from '../../../utils'

const GoogleBtn = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            
                <Image source={ILGoogle} style={styles.logo}/>
            
                <Text style={styles.title}>Sign in with Google</Text>
            
        </TouchableOpacity>
    )
}

export default GoogleBtn

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.blue,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
       
    },
    wrapperLogo: {
        
    },
    logo: {
        height: windowHeight * 0.03,
        width: windowWidth * 0.06,
        marginRight: 20
    },
    title: {
        color: colors.white,
        fontSize: 14,
        fontFamily: fonts.primary[600]
    }
})
