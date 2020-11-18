import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors, dimension, fonts } from '../../../utils'

const ProductItem = ({img, title, price, stock, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={img} style={styles.img} />
            <Text style={styles.title}>
                {title.length > 20 ? title.slice(0,17) + '...' : title}
            </Text>
            <Text style={styles.price}>Rp {price}</Text>
            <Text style={styles.stock(stock)}>{stock}</Text>
        </TouchableOpacity>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        paddingBottom: 10,
        marginBottom: 10,
    },
    img: {
        height: dimension.height * 0.212,
        width: dimension.width * 0.425,
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
    stock: (stock) => ({
        backgroundColor: stock === 'Menipis' ? colors.red : colors.black,
        position: 'absolute',
        color: colors.white ,
        fontSize: 12,
        fontFamily: fonts.primary[600],
    })
    
})
