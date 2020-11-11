import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ILProduct1, ILProduct2 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ProductItem = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={ILProduct2} style={styles.img} />
            <Text style={styles.title}>Unexpected Journey</Text>
            <Text style={styles.price}>Rp 125.000</Text>
            <Text style={styles.stock}>Ada stock</Text>
        </TouchableOpacity>
    )
}

export default ProductItem

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        paddingBottom: 10
        
    },
    img: {
        height: windowHeight * 0.212,
        width: windowWidth * 0.425,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        textAlign: 'left',
        marginLeft: 20
    },
    price: {
        fontSize: 12,
        fontFamily: fonts.primary[900],
        textAlign: 'left',
        marginLeft: 20
    },
    stock: {
        backgroundColor: colors.black,
        position: 'absolute',
        color: colors.white,
        fontSize: 11,
        fontFamily: fonts.primary[600]
    }
    
})
