import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ILCat1, ILCat2, ILCat3, ILCat4 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Category = ({img, title}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={img} style={styles.image} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Category

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
       width: '50%',
       backgroundColor: 'rgba(0,0,0, 0.3)',
       alignItems: 'center',
       justifyContent: 'center'
    },
    image: {
       height: windowHeight * 0.18,
       width: windowWidth * 0.36,
       resizeMode: 'contain',
    },
    text: {
        fontSize: 20,
        fontFamily: fonts.primary[800],
        position: 'absolute',
        top: 75,
        color: colors.white
    }
})
