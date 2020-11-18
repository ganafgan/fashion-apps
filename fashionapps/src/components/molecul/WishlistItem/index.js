import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, dimension, fonts } from '../../../utils'
import { Button, Gap } from '../../atom'

const WishlistItem = ({onPress, img}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={1}>
            <View style={styles.wrapperProduct}>
                <Image source={img} style={styles.img}/>
                <View style={styles.wrapperTitle}>
                    <Text style={styles.title}>Tshirt Shogunate</Text>
                    <Gap height={dimension.height * 0.006} />
                    <Text style={styles.type}>Warna hitam</Text>
                    <Gap height={dimension.height * 0.006} />
                    <Text style={styles.type}>Size S</Text>
                    <Gap height={dimension.height * 0.006} />
                    <Text style={styles.price}>Rp. 120.000</Text>
                    <Gap height={dimension.height * 0.048} />
                </View>
            </View>
            <View style={styles.wrapperButton}>
                <Button type='icon-only' icon='trash' />
                <View style={styles.wrapperChartButton}>
                    <Button title='Masuk keranjang' mini />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default WishlistItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 10,
        marginBottom: dimension.height * 0.024,
        borderWidth: 1,
        borderColor: colors.border
    },
    wrapperProduct: {
        flexDirection: 'row'
    },
    img: {
        height: dimension.height * 0.24,
        width: dimension.width * 0.425,
        resizeMode: 'cover',
        marginRight: 10
    },
    wrapperTitle: {
        paddingTop : dimension.height * 0.024
    },
    title: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors.black
    },
    price: {
        fontSize: 14,
        fontFamily: fonts.primary[900],
        color: colors.black
    },
    type: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors.black
    },
    wrapperButton: {
        flexDirection: 'row'
    },
    wrapperChartButton: {
        flex: 1,
        marginLeft: 10
    }
})
